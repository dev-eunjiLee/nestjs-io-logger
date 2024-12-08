import { Global, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CustomLogger } from "./nestjs-io-logger.service";
import { LoggerStorage } from "./logger-storage.service";
import { LoggerMiddleware } from "./logger.middleware";

@Module({
  providers: [
    {
      provide: LoggerStorage,
      useClass: LoggerStorage,
    },
    CustomLogger,
    LoggerMiddleware,
  ],
  exports: [LoggerStorage, CustomLogger, LoggerMiddleware],
})
@Global()
export class NestjsIoLoggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
