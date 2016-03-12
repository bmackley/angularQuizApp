import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2/angularfire';
import {provide } from 'angular2/core';
import {createStore} from '../node_modules/redux/dist/redux.js';
import {rootReducer} from './redux/reducers';
const store = createStore(rootReducer);
bootstrap(AppComponent, [provide('REDUX_STORE', {useValue: store})]);

// bootstrap(AppComponent, [
//   provide(defaultFirebase, {
//     useValue: 'https://e3education.firebaseio.com/'
//   }),
//   FIREBASE_PROVIDERS
// ])
