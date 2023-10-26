import CounterType from './counter.types';

const INITIAL_STATE = {
    counter: 0, 
    message :"hola mundo",
    cartItems : [],
  };

  const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CounterType.INCREMENT:
        return {
          ...state,
          counter : state.counter +1
        };
        case CounterType.DECREMENT:
            return {
              ...state,
              counter : state.counter -1
            };
            case CounterType.RESET:
                return {
                  ...state,
                  counter : 0
                };
     case CounterType.default : return {
        ...state,
        counter : state.counter -1
     }
  
      default:
        return state;
    }
  };
  export default counterReducer;
  