import {Injectable} from '@angular/core';
import {environment as env} from '@env/environment.dev';
import {Title, Meta} from '@angular/platform-browser';

export interface metaService {
  keywords: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class MetaService {

  keywords = 'E-invoicing platform';
  description = 'Sahabat Bisnis adalah sebuah platform digital pencatatan transaksi bisnis yang inovatif dan terlengkap di Indonesia untuk membantu UMKM dan Perusahaan dalam mendapatkan pendanaan.'

  constructor(
    public title: Title,
    private meta: Meta
  ) {
  }

  initMetadata() {
    this.title.setTitle(env.appName);
    this.meta.addTags([
      {name: 'author', content: env.appName},
      {name: 'robots', content: 'index, follow'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'keywords', content: this.keywords},
      {name: 'description', content: this.description},
    ]);
  }
}
