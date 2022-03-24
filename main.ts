// import FtpClient from 'promise-ftp';
import * as ftp from 'basic-ftp';
import dotenv from 'dotenv';
import path from 'path';
import LogSystem from './lib/logsystem';
import { GetDate, GetUTCdate, TimeZone, getFilesRecursive } from './lib/utils';
import { backupMongoDB, backupMysql } from './lib/backup';

dotenv.config();
const log = new LogSystem('./log/db_backup.log');

async function mysql(client: ftp.Client, name: string, ErrorHandler: (msg: string, err?: any) => Promise<never>) {
  const backupPath = './DB_backup/mysql/all.sql';
  const backupDestPath = `/db_backup/${name}/mysql`;

  let timer = Date.now();
  const backupResult = backupMysql(
    backupPath,
    process.env.MYSQL_HOST,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    process.env.MYSQL_PORT,
  );
  if (!backupResult.status) {
    return ErrorHandler('backupMysql() Failed', backupResult.err);
  }

  log.info(`\n${backupResult.result}`);
  log.info('Dump DB Completed', `Time Elapsed: ${((Date.now() - timer) / 1000).toLocaleString()}s`);

  timer = Date.now();
  await client
    .uploadFromDir(path.dirname(backupPath), backupDestPath)
    .catch(async (err) => ErrorHandler('Faild Upload BackupFile to FTP', err));

  log.info('FTP upload Completed', `Time Elapsed: ${((Date.now() - timer) / 1000).toLocaleString()}s`);
}

async function mongodb(client: ftp.Client, name: string, ErrorHandler: (msg: string, err?: any) => Promise<never>) {
  const backupPath = './DB_backup/mongo';
  const backupDestPath = `/db_backup/${name}/mongo`;

  let timer = Date.now();
  const backupResult = backupMongoDB(
    backupPath,
    process.env.MONGO_HOST,
    process.env.MONGO_USER,
    process.env.MONGO_PASSWORD,
    process.env.MONGO_PORT,
  );
  if (!backupResult.status) {
    return ErrorHandler('backupMongoDB() Failed', backupResult.err);
  }

  log.info(`\n${backupResult.result}`);
  log.info('Dump DB Completed', `Time Elapsed: ${((Date.now() - timer) / 1000).toLocaleString()}s`);

  timer = Date.now();
  await client.uploadFromDir(backupPath, backupDestPath).catch(async (err) => ErrorHandler('FTP upload Falied', err));

  log.info('FTP upload Completed', `Time Elapsed: ${((Date.now() - timer) / 1000).toLocaleString()}s`);
}

async function main() {
  const client = new ftp.Client();

  const ErrorHandler = async (msg: string, err?: any) => {
    if (!err) {
      log.err(msg);
    } else {
      log.err(msg, err);
    }
    await client.close();
    process.exit(1);
  };

  await client
    .access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
    })
    .catch(async (err) => ErrorHandler('Falied Connect FTP', err));

  const name = GetDate(new Date(GetUTCdate().getTime() + 540 * 60 * 1000)).join('_');
  const list = await client.list('/db_backup').catch(async (err) => ErrorHandler('Falid List /db_backup', err));

  if (list.filter((item) => item.type === ftp.FileType.Directory && item.name === name).length) {
    await ErrorHandler('Backup Already Exists');
  }

  await mysql(client, name, ErrorHandler);
  await mongodb(client, name, ErrorHandler);

  await client.close();
  process.exit(0);
}

main();
