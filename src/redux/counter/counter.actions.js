
import CounterType from "./counter.types";

export const increment = () => {
    return {
      type: CounterType.INCREMENT,
    };
  };
  
  export const decrement = () => {
    return {
      type: CounterType.DECREMENT,
    };
  };
  
  export const reset = () => {
    return {
      type: CounterType.RESET,
    };
  };
  
 