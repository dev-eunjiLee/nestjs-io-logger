import { Global, Module } from "@nestjs/common";
import { CustomLogger } from "./nestjs-io-logger.service";
import { AsyncLocalStorage } from "async_hooks";
import { AlsType } from "./type";
import { LoggerStorage } from "./logger-storage.service";

@Module({
  providers: [
    {
      provide: LoggerStorage,
      useValue: new AsyncLocalStorage<AlsType>(),
    },
    CustomLogger,
  ],
  exports: [LoggerStorage],
})
@Global()
export class NestjsIoLoggerModule {}
