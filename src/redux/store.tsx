import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";



// add your midllewares in the array below
const middleware = [thunk];

//create the store 
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);