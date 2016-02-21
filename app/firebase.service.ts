import {Injectable} from 'angular2/core';

@Injectable()
export class FireBaseService {
  getFirebase() {
    const fireBaseInfo = new Firebase("https://boiling-heat-311.firebaseio.com/");
    return Promise.resolve(fireBaseInfo);
  }
}
