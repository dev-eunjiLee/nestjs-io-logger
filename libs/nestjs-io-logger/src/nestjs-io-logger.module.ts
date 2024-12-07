import { Module } from '@nestjs/common';
import { NestjsIoLoggerService } from './nestjs-io-logger.service';

@Module({
  providers: [NestjsIoLoggerService],
  exports: [NestjsIoLoggerService],
})
export class NestjsIoLoggerModule {}
