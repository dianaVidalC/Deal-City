// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAlzUmD0gCIbd_N001h_7c4BvegPLs4CQk',
    authDomain: 'deal-city.firebaseapp.com',
    databaseURL: 'https://deal-city.firebaseio.com',
    projectId: 'deal-city',
    storageBucket: 'deal-city.appspot.com',
    messagingSenderId: '763427152201'
  }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
