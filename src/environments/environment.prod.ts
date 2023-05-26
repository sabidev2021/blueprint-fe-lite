// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: '',
  production: true,
  appName: '',
  keycloakUrl: '',
  keycloakRealm: '',
  keycloakClientId: '',
  tracker: true,
  analytics: {
    gtm: {
      code: ''
    }
  },
  log: {
    sabiLog: false
  },
  endpoint: '',
  services_name: {
    inventoryService: {
      title: '',
      baseUrl: '',
    },
    companyService: {
      title: '',
      baseUrl: '',
    },
    userAdminService: {
      title: '',
      baseUrl: '',
    },
    salesService: {
      title: '',
      baseUrl: '',
    },
    notificationService: {
      title: '',
      baseUrl: '',
    },
    salesDashboardService: {
      title: '',
      baseUrl: '',
    },
    landingService: {
      title: '',
      baseUrl: '',
    }
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

