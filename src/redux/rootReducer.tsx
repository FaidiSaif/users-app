import { combineReducers } from "redux";


// import the substates types
import { UserStateType , userReducer } from "./user";

// create the global state type
export type StateType =  {
  users : UserStateType
}

export const rootReducer = combineReducers({
  users : userReducer 
});
