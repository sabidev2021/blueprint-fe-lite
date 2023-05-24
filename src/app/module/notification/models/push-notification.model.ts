export enum PushNotificationStatusEnum {
  'READ', 'UNREAD'
}

export class PushNotification {
  createdDate: Date = new Date();
  updatedDate = "";
  pushNotificationId = 0;
  pushTemplateAppId = "";
  pushTemplateCategory = "";
  pushTemplateTopic = "";
  pushNotificationUserId = "";
  pushNotificationRecipient = "";
  pushNotificationStatus: PushNotificationStatusEnum = PushNotificationStatusEnum.UNREAD;
  pushNotificationTitle = "";
  pushNotificationContent = "";
  paramKey = "";
  content: any[] = [];
  logo: any;
  name: any;
  email: any;
  location: any;
}
