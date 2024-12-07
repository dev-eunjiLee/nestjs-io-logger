import { Test, TestingModule } from '@nestjs/testing';
import { NestjsIoLoggerService } from './nestjs-io-logger.service';

describe('NestjsIoLoggerService', () => {
  let service: NestjsIoLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsIoLoggerService],
    }).compile();

    service = module.get<NestjsIoLoggerService>(NestjsIoLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
