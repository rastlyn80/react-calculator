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
  currentDigit: "0",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DIGIT:
      if (state.currentDigit.length > 18) return state;
      if (state.currentDigit === "0" && action.payload === "0") return state;
      if (state.currentDigit === "0")
        return { ...state, currentDigit: action.payload };

      return {
        ...state,
        currentDigit: state.currentDigit.concat(action.payload),
      };

    default:
      return state;
  }
};
