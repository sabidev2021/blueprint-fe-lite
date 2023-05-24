import {ErrorHandler} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {getErrMessage} from "./sabi-error-response";

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error(error)
    if (error instanceof HttpErrorResponse) {
      console.error(getErrMessage(error))
    }
  }
}
