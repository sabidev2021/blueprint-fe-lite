import {Injectable} from '@angular/core';
import {Lang} from '@app/lang/lang.id'

@Injectable({
  providedIn: 'root'
})
export class SabiLangService {
  lang = new Map(
    Lang.components.map(x => {
      return [x.name, x.caption]
    }));

  getListCaption(name: string) {
    return new Map(
      this.lang.get(name)?.map(x => {
        return [x.code, x.value]
      }))
  }
}
