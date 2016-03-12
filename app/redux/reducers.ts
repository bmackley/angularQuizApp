import {InitialState} from './initial-state'

export function rootReducer(state = InitialState, action){
  switch(action.type){
    default: {
      return state;
    }
  }

}
