import {Inject, Injectable} from '@angular/core';
import {ApiTrackerService} from "@core/tracker/thrid-party-api/api-tracker.service";

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  moduleName: string;
  lifetime = 0

  constructor(
    private apiTrackerService: ApiTrackerService,
    @Inject(String) moduleName = '',
  ) {
    this.moduleName = moduleName
  }

  onInitTracker() {
    this.apiTrackerService.initializeTracker()
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  onClickAddEvent(property: object = {}) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`click add ${this.moduleName}`, property)
  }

  onEditEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`edit ${this.moduleName}`, property)
  }

  onEditSuccessEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`edit ${this.moduleName} success`, property)
  }

  onClickDataEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`click ${this.moduleName} data`, property)
  }

  onClickConnectEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`connect ${this.moduleName} data`, property)
  }

  onClickDisconnectEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`disconnect ${this.moduleName}`, property)
  }

  onDisconnectSuccessEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`disconnect ${this.moduleName} success`, property)
  }

  onSaveEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`save ${this.moduleName}`, property)
  }

  onSaveDraftEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`save draf ${this.moduleName}`, property)
  }

  onSendEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`send ${this.moduleName}`, property)
  }

  onSendSuccessEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`send ${this.moduleName} success`, property)
  }

  onCreateEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`create ${this.moduleName}`, property)
  }

  onAcceptEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`accept ${this.moduleName}`, property)
  }

  onRejectEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`reject ${this.moduleName}`, property)
  }

  onApproveEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`approve ${this.moduleName}`, property)
  }

  onCancelEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`cancel ${this.moduleName}`, property)
  }

  onDeleteSuccessEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`delete ${this.moduleName} success`, property)
  }

  onDeleteEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`delete ${this.moduleName}`, property)
  }

  onCancelSuccessEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`cancel ${this.moduleName} success`, property)
  }

  onSearchEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`search ${this.moduleName}`, property)
  }

  onInviteEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`invite ${this.moduleName}`, property)
  }

  onInviteSuccessEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`invite ${this.moduleName} success`, property)
  }

  onSaveSuccessEvent(property: object) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`save ${this.moduleName} success`, property)
  }

  onCLikEvent(property: object = {}, eventName: string) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`click ${eventName}`, property)
  }

  onSelectEvent(property: object = {}, eventName: string) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`select ${eventName}`, property)
  }

  onLogoutMessage(property: object = {}) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`logout fail`, property)
  }

  onSpecialEvent(property: object = {}, eventName: string) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(eventName, property)
  }

  onClickDownloadPdfEvent(property: object = {}) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`download pdf ${this.moduleName}`, property)
  }

  errorFrontEnd(property: object = {'error_message-front_end': 'Oops terjadi kesalahan sistem'}) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`error trigger`, property)
  }

  errorBackEnd(property: object = {'error_message-back_end': 'Oops terjadi kesalahan sistem'}) {
    Object.assign(property, {lifetime_usage: this.lifetime})
    this.apiTrackerService.trackingEvent(`error trigger`, property)
  }
}
