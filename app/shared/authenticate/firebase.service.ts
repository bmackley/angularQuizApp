import {Injectable} from 'angular2/core';

@Injectable()
export class FireBaseService {
  getFirebase() {
    const fireBaseInfo = new Firebase("https://e3education.firebaseio.com/");
    return Promise.resolve(fireBaseInfo);
  }
}
