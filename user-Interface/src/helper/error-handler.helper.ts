import { ErrorType } from "../bridge/enum/errorType";
import { HttpStatus } from "../bridge/enum/http-status.enum";

class ErrorHandler {
  handleControllerExeption(error: unknown): string {
    if (typeof error === "string") {
      console.error(`[ERROR: string]:${error}\n`);
      return error;
    } else if (error instanceof Error) {
      console.error(`[ERROR: ${error.name}]:${error.message}\n [STACKTRACE]: ${error.stack}\n`);
      return error.message;
    }
    console.error(`[ERROR:unknown]: ${error}\n`);
    return "unknow error occured";
  }

  handlePostValueError(value: any): string | undefined {
    if (Object.keys(value).length === 0) {
      return "sent_body_empty";
    }
  }

  handleControllerListParameters(page: string, take: string): ErrorType | undefined {
    if (Number.isNaN(Number(page))) return ErrorType.PageParamIsNaN;

    if (Number.isNaN(Number(take))) return ErrorType.TakeParamIsNaN;

    if (Number(page) < 1) return ErrorType.PageParamOutOfBounds;

    if (Number(take) < 1) return ErrorType.TakeParamOutOfBounds;
  }
}

export default new ErrorHandler();
