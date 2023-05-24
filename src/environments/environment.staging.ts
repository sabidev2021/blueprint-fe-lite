// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'staging',
  production: false,
  appName: 'Sahabat Bisnis',
  keycloakUrl: 'https://user.stag.sabienv.xyz/auth',
  keycloakRealm: 'SBI',
  keycloakClientId: 'sahabatbisnis-web',
  tracker: true,
  analytics: {
    gtm: {
      code: 'GTM-K2J2N7W'
    }
  },
  log: {
    sabiLog: true
  },
  endpoint: 'stag.sabienv.xyz',
  services_name: {
    inventoryService: {
      title: 'inventory-service',
      baseUrl: 'https://api.stag.sabienv.xyz/inventory',
    },
    companyService: {
      title: 'company-service',
      baseUrl: 'https://api.stag.sabienv.xyz/company',
    },
    userAdminService: {
      title: 'user-admin-service',
      baseUrl: 'https://api.stag.sabienv.xyz/user-admin',
    },
    salesService: {
      title: 'sales-service',
      baseUrl: 'https://api.stag.sabienv.xyz/sales',
    },
    notificationService: {
      title: 'notification-service',
      baseUrl: 'https://api.stag.sabienv.xyz/notification',
    },
    salesDashboardService: {
      title: 'sales-dashboard-service',
      baseUrl: 'https://api.stag.sabienv.xyz/sales-dashboard',
    },
    landingService: {
      title: 'landing-service',
      baseUrl: 'https://stag.sabienv.xyz',
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

