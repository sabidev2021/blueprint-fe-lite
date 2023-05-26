import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbLocalService {

  save<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  get<T>(key: string): T | null {
    const data = localStorage.getItem(key)
    if (data == null)
      return null
    return JSON.parse(data)
  }

  remove(key: string) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}
