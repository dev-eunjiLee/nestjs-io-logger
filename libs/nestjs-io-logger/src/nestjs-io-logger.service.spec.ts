import { Test, TestingModule } from "@nestjs/testing";
import { CustomLogger } from "./nestjs-io-logger.service";

describe("NestjsIoLoggerService", () => {
  let loggerService: CustomLogger;

  // beforeEach: 각각의 테스트 케이스가 실행되기전에 실행되는 설정
  beforeEach(async () => {
    const loggerModule: TestingModule = await Test.createTestingModule({
      providers: [CustomLogger],
    }).compile();

    loggerService = loggerModule.get<CustomLogger>(CustomLogger);
  });

  it("should be defined", () => {
    expect(loggerService).toBeDefined();
  });
});
