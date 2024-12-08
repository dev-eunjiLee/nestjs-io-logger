import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { LoggerStorage } from "./logger-storage.service";
import { CustomLogger } from "./nestjs-io-logger.service";
import { AlsType } from "./type";

export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly loggerStorage: LoggerStorage) {}

  use(req: Request, res: Response, next: NextFunction) {
    const store: AlsType = {
      customLogger: new CustomLogger(),
    };

    this.loggerStorage.run(store, () => {
      next();
    });
  }
}
