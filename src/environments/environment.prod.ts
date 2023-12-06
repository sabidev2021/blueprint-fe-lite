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
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

