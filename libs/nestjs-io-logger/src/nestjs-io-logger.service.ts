import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST })
export class NestjsIoLoggerService {
  private readonly requestId: string;

  constructor() {
    this.requestId = new Date().toISOString();
    console.log("😀", this.requestId);
  }
}
