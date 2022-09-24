import {
  ADD_DIGIT,
  MULTIPLY,
  ADD,
  SUBTRACT,
  DIVIDE,
  CANCEL,
  ADD_DECIMAL,
  SHOW_RESULT,
} from "../actions/types";

const INITIAL_STATE = {
  currentDigit: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DIGIT:
      return { ...state, currentDigit: action.payload };

    default:
      return state;
  }
};
