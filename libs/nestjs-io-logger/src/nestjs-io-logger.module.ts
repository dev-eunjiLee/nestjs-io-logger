import { Global, Module } from "@nestjs/common";
import { CustomLogger } from "./nestjs-io-logger.service";
import { AsyncLocalStorage } from "async_hooks";
import { AlsType } from "./type";
import { LoggerStorage } from "./logger-storage.service";
import { LoggerMiddleware } from "./logger.middleware";

@Module({
  providers: [
    {
      provide: LoggerStorage,
      useValue: new AsyncLocalStorage<AlsType>(),
    },
    CustomLogger,
    LoggerMiddleware,
  ],
  exports: [LoggerStorage, CustomLogger, LoggerMiddleware],
})
@Global()
export class NestjsIoLoggerModule {}
