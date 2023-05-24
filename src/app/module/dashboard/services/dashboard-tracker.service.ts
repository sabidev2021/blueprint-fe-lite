import {Injectable} from '@angular/core';
import {TrackerService} from "@core/tracker/tracker.service";
import {ApiTrackerService} from "@core/tracker/thrid-party-api/api-tracker.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardTrackerService extends TrackerService {

  constructor(
    apiTrackerService: ApiTrackerService,
  ) {
    super(apiTrackerService, 'dashboard')
  }

}
