import {Injectable} from '@angular/core';
import {HttpClientService} from '@core/http/http-client.service';

@Injectable()

export class DashboardService {
  private serviceName = 'user-admin-services'

  constructor(
    private httpClient: HttpClientService,
  ) {
  }
}
