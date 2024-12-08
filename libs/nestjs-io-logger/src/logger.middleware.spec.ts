import { INestApplication, NestMiddleware } from "@nestjs/common";
import { LoggerMiddleware } from "./logger.middleware";
import { NestjsIoLoggerModule } from "./nestjs-io-logger.module";
import { Test } from "@nestjs/testing";
import { createRequest } from "node-mocks-http";
import { NextFunction, Request, Response } from "express";

/**
 * @ref https://nl-santhosh-kumar.medium.com/how-to-unit-test-middleware-in-nest-f5e6c9d7a075
 */
describe("Logger Set Middleware", () => {
  let app: INestApplication;
  let loggerSetMiddleware: NestMiddleware;
  let mockRequest: Request;
  let mockResponse: Response;
  let nextFunction: NextFunction;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [NestjsIoLoggerModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    loggerSetMiddleware = app.get<NestMiddleware>(LoggerMiddleware);
    nextFunction = jest.fn();
  });

  beforeEach(() => {
    mockRequest = createRequest({
      method: "GET",
      url: "/user/42",
      params: {
        id: 42,
      },
      headers: {
        Origin: "http://localhost:5050/",
      },
    });
  });

  it("should trigger the next function", async () => {
    loggerSetMiddleware.use(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );
    expect(nextFunction).toHaveBeenCalled();
  });
});
