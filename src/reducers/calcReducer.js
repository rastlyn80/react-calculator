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
  hasDecimal: false,
  currentOperation: null,
  previousDigit: null,
  onOperation: false,
};

export default (state = INITIAL_STATE, action) => {
  const performCalculation = (current, previous, operation) => {
    switch (operation) {
      case "add":
        return (Number(current) + Number(previous)).toString();
    }
  };

  switch (action.type) {
    case ADD_DIGIT:
      if (state.onOperation)
        return {
          ...state,
          previousDigit: state.currentDigit,
          currentDigit: action.payload,
          onOperation: false,
        };
      if (state.currentDigit.length > 18) return state;
      if (state.currentDigit === "0" && action.payload === "0") return state;
      if (state.currentDigit === "0")
        return {
          ...state,
          currentDigit: action.payload,
        };
      return {
        ...state,
        currentDigit: state.currentDigit.concat(action.payload),
      };

    case ADD_DECIMAL:
      return state.hasDecimal
        ? state
        : {
            ...state,
            currentDigit: state.currentDigit.concat("."),
            hasDecimal: true,
          };

    case CANCEL:
      return { ...state, currentDigit: "0", hasDecimal: false };

    case ADD:
      return state.previousDigit
        ? {
            ...state,
            currentDigit: performCalculation(
              state.currentDigit,
              state.previousDigit,
              state.currentOperation
            ),
            currentOperation: "add",
            onOperation: true,
          }
        : {
            ...state,
            currentOperation: "add",
            previousDigit: state.currentDigit,
            onOperation: true,
          };

    case SHOW_RESULT:
      return {
        ...state,
        currentDigit: performCalculation(
          state.currentDigit,
          state.previousDigit,
          state.currentOperation
        ),
        currentOperation: "add",
        previousDigit: "0",
        onOperation: false,
      };

    default:
      return state;
  }
};
