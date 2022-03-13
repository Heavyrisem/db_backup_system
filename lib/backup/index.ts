import fs from 'fs';
import { spawnSync, SpawnSyncOptions, SpawnSyncReturns } from 'child_process';
import { resolve, dirname } from 'path';

interface successResult {
  status: true;
  result: string;
}
interface errorResult {
  status: false;
  err: any;
}
type CommandResult = successResult | errorResult;

function executeCommand(command: string, args: string[], options?: SpawnSyncOptions) {
  try {
    // console.log('Running command:', [command, args.join(' ')].join(' '), options);
    const ps = spawnSync([command, args.join(' ')].join(' '), { shell: true, encoding: 'utf8', ...options });

    if (ps.error || ps.status !== 0) throw ps;

    return ps.output.filter((item) => !!item).toString();
  } catch (error) {
    const err = error as Partial<SpawnSyncReturns<Buffer>>;

    if (err.output && err.status) {
      throw new Error(`Non-zero Exit Code: ${err.status}, ${command} ${args.join(' ')}, out: ${err.output.toString()}`);
    }

    throw error;
  }
}

export function backupMysql(
  path: string,
  host: string,
  user: string,
  password: string,
  port = '3306',
  ...args: string[]
): CommandResult {
  try {
    const commandArgs = ['--all-databases', '-h', host, `--user=${user}`, `--password=${password}`, `--port=${port}`, ...args];
    const sql = executeCommand('mysqldump', commandArgs, { timeout: 5 * 60 * 1000 });

    if (!fs.existsSync(dirname(resolve(path)))) {
      fs.mkdirSync(dirname(resolve(path)), { recursive: true });
    }

    fs.writeFileSync(resolve(path), sql);

    return { status: true, result: 'Success' };
  } catch (err) {
    return { status: false, err };
  }
}

export function backupMongoDB(
  path: string,
  host: string,
  user: string,
  password: string,
  port = '27017',
  ...args: string[]
): CommandResult {
  try {
    const commandArgs = ['-h', host, '-o', resolve(path), '-u', user, '-p', password, `--port=${port}`, ...args];
    const result = executeCommand('mongodump', commandArgs, { timeout: 5 * 60 * 1000 });

    return { status: true, result };
  } catch (err) {
    return { status: false, err };
  }
}

export function backupMongo() {}
