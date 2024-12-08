import { Injectable } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";
import { AlsType } from "./type";

@Injectable()
export class LoggerStorage extends AsyncLocalStorage<AlsType> {}
