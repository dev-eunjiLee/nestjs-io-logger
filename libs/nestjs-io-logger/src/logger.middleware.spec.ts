import { INestApplication, NestMiddleware } from "@nestjs/common";
import { LoggerMiddleware } from "./logger.middleware";
import { NestjsIoLoggerModule } from "./nestjs-io-logger.module";
import { Test } from "@nestjs/testing";
import { createRequest } from "node-mocks-http";
import { NextFunction, Request, Response } from "express";
import { LoggerStorage } from "./logger-storage.service";

/**
 * @ref https://nl-santhosh-kumar.medium.com/how-to-unit-test-middleware-in-nest-f5e6c9d7a075
 */
describe("Logger Set Middleware", () => {
  let loggerStorage: LoggerStorage;
  let loggerMiddleware: LoggerMiddleware;

  beforeEach(() => {
    loggerStorage = new LoggerStorage();
    loggerMiddleware = new LoggerMiddleware(loggerStorage);
  });

  it("should log the request method and URL", () => {
    const mockRequest = createRequest({
      method: "GET",
      url: "/user/42",
      params: {
        id: 42,
      },
      headers: {
        Origin: "http://localhost:5050/",
      },
    });

    const res = {} as Response;
    const next = jest.fn();

    loggerMiddleware.use(mockRequest, res, next);
  });
});
