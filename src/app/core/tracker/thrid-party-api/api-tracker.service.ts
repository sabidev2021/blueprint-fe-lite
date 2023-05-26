import {Injectable} from '@angular/core';
import {AuthService} from "@core/auth/auth.service";
import {SabiLogService} from "@core/logs/sabi-log.service";
import {environment} from "@env/environment.dev";

@Injectable({
  providedIn: 'root'
})
export class ApiTrackerService {

  constructor(
    private auth: AuthService,
    private log: SabiLogService
  ) {
  }

  trackingEvent(eventName: string, data: object): void {
    if (environment.tracker) {
      try {
        (window as any).Moengage.track_event(eventName, data);
      } catch (err) {
        this.log.error(err)
      }
    }
  }

  initializeTracker() {
    this.userLogin()
    this.userBasicAttribute()
    this.trackingEvent('login success', {lifetime_usage: 0})
  }

  userCustomAttribute(attribute: string, data: any): void {
    if (environment.tracker) {
      try {
        (window as any).Moengage.add_user_attribute(attribute, data);
      } catch (err) {
        this.log.error(err)
      }
    }
  }

  trackingPage(): void {
    if (environment.tracker) {
      try {
        (window as any).MoEngage.track_page_view()
      } catch (err) {
        this.log.error(err)
      }
    }
  }

  private userLogin(): void {
    if (environment.tracker) {
      try {
        (window as any).Moengage.add_unique_user_id(this.auth.userId)
      } catch (err) {
        this.log.error(err)
      }
    }
  }

  private userBasicAttribute(): void {
    if (environment.tracker) {
      try {
        // (window as any).Moengage.add_first_name(first_name);
        // (window as any).Moengage.add_last_name(last_name);
        (window as any).Moengage.add_email(this.auth.user);
        // (window as any).Moengage.add_mobile(mobile);
        (window as any).Moengage.add_user_name(this.auth.name);
        // (window as any).Moengage.add_gender(gender);
        // (window as any).Moengage.add_birthday(birthdate);
        this.userCustomAttribute('business_name', this.auth.beName);
        this.userCustomAttribute('business_user_id', this.auth.beId);
      } catch (err) {
        this.log.error(err)
      }
    }
  }
}
