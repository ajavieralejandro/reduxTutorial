import { combineReducers } from "redux";
import counterReducer from "./counter/counter.reducers";


const allReducers = combineReducers({
  counter : counterReducer,
});
export default allReducers;