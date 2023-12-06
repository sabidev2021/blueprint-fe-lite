// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'local',
  production: false,
  appName: '',
  keycloakUrl: '',
  keycloakRealm: '',
  keycloakClientId: '',
  tracker: false,
  analytics: {
    gtm: {
      code: ''
    }
  },
  log: {
    sabiLog: true
  },
  endpoint: '',
  services_name: { },
  module_name: { },
  design_systems: { },
  mockoonService: { },
  firebaseConfig: { }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

