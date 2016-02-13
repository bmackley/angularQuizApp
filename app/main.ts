import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2/angularfire'
bootstrap(AppComponent);

// bootstrap(AppComponent, [
//   provide(defaultFirebase, {
//     useValue: 'https://e3education.firebaseio.com/'
//   }),
//   FIREBASE_PROVIDERS
// ])
