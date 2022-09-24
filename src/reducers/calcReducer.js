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
      case "multiply":
        return (Number(current) * Number(previous)).toString();
      case "divide":
        return (Number(previous) / Number(current)).toString();
      case "subtract":
        return (Number(previous) - Number(current)).toString();
    }
  };

  switch (action.type) {
    case ADD_DIGIT:
      if (state.currentDigit === "")
        return {
          ...state,
          currentDigit: action.payload,
          onOperation: false,
          hasDecimal: false,
        };

      if (state.onOperation && state.currentDigit !== "-")
        return {
          ...state,
          previousDigit: state.currentDigit,
          currentDigit: action.payload,
          onOperation: false,
          hasDecimal: false,
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
      return {
        ...state,
        currentDigit: "0",
        hasDecimal: false,
        onOperation: false,
      };

    case ADD:
      if (state.onOperation && state.currentDigit === "-")
        return { ...state, currentOperation: "add", currentDigit: "" };
      if (state.onOperation) return { ...state, currentOperation: "add" };
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

    case MULTIPLY:
      if (state.onOperation && state.currentDigit === "-")
        return { ...state, currentOperation: "multiply", currentDigit: "" };

      if (state.onOperation) return { ...state, currentOperation: "multiply" };

      return state.previousDigit
        ? {
            ...state,
            currentDigit: performCalculation(
              state.currentDigit,
              state.previousDigit,
              state.currentOperation
            ),
            currentOperation: "multiply",
            onOperation: true,
          }
        : {
            ...state,
            currentOperation: "multiply",
            previousDigit: state.currentDigit,
            onOperation: true,
          };

    case DIVIDE:
      if (state.onOperation && state.currentDigit === "-")
        return { ...state, currentOperation: "divide", currentDigit: "" };

      if (state.onOperation) return { ...state, currentOperation: "divide" };

      return state.previousDigit
        ? {
            ...state,
            currentDigit: performCalculation(
              state.currentDigit,
              state.previousDigit,
              state.currentOperation
            ),
            currentOperation: "divide",
            onOperation: true,
          }
        : {
            ...state,
            currentOperation: "divide",
            previousDigit: state.currentDigit,
            onOperation: true,
          };

    case SUBTRACT:
      if (state.onOperation)
        return {
          ...state,
          currentDigit: "-",
          previousDigit: state.currentDigit,
        };

      return state.previousDigit
        ? {
            ...state,
            currentDigit: performCalculation(
              state.currentDigit,
              state.previousDigit,
              state.currentOperation
            ),
            currentOperation: "subtract",
            onOperation: true,
          }
        : {
            ...state,
            currentOperation: "subtract",
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
