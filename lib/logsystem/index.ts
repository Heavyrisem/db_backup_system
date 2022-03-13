import fs from 'fs';
import { inspect } from 'util';
import { TimeZone } from '../utils';

export enum LogType {
  ERROR = 'Error',
  INFO = 'Info',
  DEBUG = 'Debug',
  WARN = 'Warn',
}

class LogSystem {
  constructor(private LogPath: string, private LogStream?: fs.WriteStream) {
    this.LogStream = fs.createWriteStream(this.LogPath, { flags: 'a' });
  }

  out(type: LogType | string, message: any, ...optionalParams: any[]) {
    console.log(this.prefix(type), message, ...optionalParams);

    const data = [this.prefix(type), message, ...optionalParams].map((item) => {
      if (typeof item === 'string') return item;
      return inspect(item, { showHidden: false, depth: null });
    });
    this.LogStream?.write(`${data.join(' ')}\n`);
  }

  err(message: any, ...optionalParams: any[]) {
    this.out(LogType.ERROR, message, ...optionalParams);
  }

  info(message: any, ...optionalParams: any[]) {
    this.out(LogType.INFO, message, ...optionalParams);
  }

  debug(message: any, ...optionalParams: any[]) {
    this.out(LogType.DEBUG, message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    this.out(LogType.WARN, message, ...optionalParams);
  }

  private prefix(type: string): string {
    return `[${[new Date().toLocaleString('ko-KR', { timeZone: TimeZone['Asia/Seoul'] }), type].join('] [')}]`;
  }
}

export default LogSystem;
