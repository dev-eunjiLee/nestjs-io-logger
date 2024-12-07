import { Injectable, Scope, LoggerService } from "@nestjs/common";

// @Injectable({ scope: Scope.REQUEST })
@Injectable()
export class NestjsIoLoggerService implements LoggerService {
  private readonly requestId: string;

  constructor() {
    this.requestId = new Date().toISOString();
    this.log("constructor");
  }

  log(message: string) {
    console.log(this.requestId, message);
  }

  error(message: string) {
    console.error(this.requestId, message);
  }

  warn(message: string) {
    console.warn(this.requestId, message);
  }
}
