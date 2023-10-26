import { combineReducers } from "redux";
import counterReducer from "./counter/counter.reducers";

//Combinamos nuestros reducers : 


const rootReducer = combineReducers({
    counter : counterReducer

  });

  export default rootReducer; 