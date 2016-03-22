import {InitialState} from './initial-state'
import {Actions } from './actions'
export function rootReducer(state = InitialState, action){
  switch(action.type){
    case Actions.authenticateUser.type: {
      const newState = Object.assign({}, state);

      newState.currentUser = {
        email : action.email
      };

      return newState;
    }
    default: {
      return state;
    }
  }

}
