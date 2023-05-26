import {HttpErrorResponse} from "@angular/common/http";

export function getErrMessage(error: HttpErrorResponse): string {
  if (error.error == null) {
    return 'data is null'
  }
  return error.status + ' - ' + JSON.parse(error.error).message;
}
