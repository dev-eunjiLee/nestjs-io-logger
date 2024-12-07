import { Injectable, Scope, LoggerService } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST })
export class NestjsIoLoggerService implements LoggerService {
  private readonly requestId: string;

  constructor() {
    this.requestId = new Date().toISOString();
    console.log("😀", this.requestId);
  }

  log(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }

  warn(message: string) {
    console.warn(message);
  }
}
