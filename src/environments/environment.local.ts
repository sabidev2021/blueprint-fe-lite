// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'local',
  production: false,
  appName: 'Sahabat Bisnis',
  keycloakUrl: 'https://user.dev.sabienv.xyz/auth',
  keycloakRealm: 'SBI.DEV',
  keycloakClientId: 'sahabatbisnis-web',
  tracker: false,
  analytics: {
    gtm: {
      code: 'GTM-K2J2N7W'
    }
  },
  log: {
    sabiLog: true
  },
  endpoint: 'dev.sabienv.xyz',
  services_name: {
    inventoryService: {
      title: 'inventory-services',
      baseUrl: 'https://inventory.dev.sabienv.xyz',
    },
    companyService: {
      title: 'company-services',
      baseUrl: 'https://company.dev.sabienv.xyz',
    },
    userAdminService: {
      title: 'user-admin-services',
      baseUrl: 'https://user-admin.dev.sabienv.xyz',
    },
    salesService: {
      title: 'sales-services',
      baseUrl: 'https://sales.dev.sabienv.xyz',
    },
    notificationService: {
      title: 'notification-services',
      baseUrl: 'https://notification.dev.sabienv.xyz',
    },
    salesDashboardService: {
      title: 'sales-dashboard-services',
      baseUrl: 'https://sales-dashboard.dev.sabienv.xyz',
    },
    landingService: {
      title: 'landing-services',
      baseUrl: 'https://dev.sabienv.xyz',
    },

  },
  module_name: { },
  design_systems: {
    accordion: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=1060%3A2376&t=zSzClfKvKE341u5G-0',
    alert: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=751%3A1476&t=zSzClfKvKE341u5G-0',
    avatar: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=770%3A1554&t=zSzClfKvKE341u5G-0',
    badge: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=725%3A1491&t=zSzClfKvKE341u5G-0',
    button: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=1393%3A3708&t=zSzClfKvKE341u5G-0',
    breadcrumb: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=970%3A1761&t=zSzClfKvKE341u5G-0',
    checkbox: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=1053%3A2345&t=zSzClfKvKE341u5G-0',
    dialog: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=755%3A1477&t=zSzClfKvKE341u5G-0',
    radioButton: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=1018%3A3385&t=zSzClfKvKE341u5G-0',
    table: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=1108%3A2460&t=zSzClfKvKE341u5G-0',
    tag: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=1018%3A2889&t=zSzClfKvKE341u5G-0',
    textField: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=933%3A2056&t=zSzClfKvKE341u5G-0',
    textArea: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=1384%3A2999&t=zSzClfKvKE341u5G-0',
    toast: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=749%3A1457&t=zSzClfKvKE341u5G-0',
    divider: 'https://www.figma.com/file/oMZVXvbVmSbTwQFZkN1sY6/Design-System---Sabi-LaaS?node-id=1018%3A1977&t=zSzClfKvKE341u5G-0',
  },
  mockoonService: {
    title: 'notification-services',
    baseUrl: ''
  },
  firebaseConfig: {
    apiKey: "AIzaSyCd2BPoMP9EnO37M8x22e7q5FrrBfPDIbM",
    authDomain: "sabi-dev-test.firebaseapp.com",
    projectId: "sabi-dev-test",
    storageBucket: "sabi-dev-test.appspot.com",
    messagingSenderId: "138002012724",
    appId: "1:138002012724:web:f3ba94552a54f616908861",
    measurementId: "G-JPFS2B2W47"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

