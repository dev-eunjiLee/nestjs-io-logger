import { Test, TestingModule } from "@nestjs/testing";
import { NestjsIoLoggerService } from "./nestjs-io-logger.service";

describe("NestjsIoLoggerService", () => {
  let service: NestjsIoLoggerService;

  // beforeEach: 각각의 테스트 케이스가 실행되기전에 실행되는 설정
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsIoLoggerService],
    }).compile();

    service = module.get<NestjsIoLoggerService>(NestjsIoLoggerService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
