import {Injectable} from '@angular/core';
import {environment} from "@env/environment.dev";

@Injectable({
  providedIn: 'root'
})
export class SabiLogService {

  isActiveLog() {
    return environment.log.sabiLog
  }

  error(message: any) {
    console.error(message)
  }

  info(message: any) {
    if (this.isActiveLog()) {
      console.log(message)
    }
  }

  warning(message: any) {
    console.warn(message)
  }
}
