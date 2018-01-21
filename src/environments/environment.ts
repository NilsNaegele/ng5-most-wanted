// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDJqxcWQntHD0VSBMoBtQAbMWCGzD4m_tA',
    authDomain: 'ng5-most-wanted.firebaseapp.com',
    databaseURL: 'https://ng5-most-wanted.firebaseio.com',
    projectId: 'ng5-most-wanted',
    storageBucket: 'ng5-most-wanted.appspot.com',
    messagingSenderId: '980321345403'
  }
};
