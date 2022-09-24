import {
  ADD_DIGIT,
  MULTIPLY,
  ADD,
  SUBTRACT,
  DIVIDE,
  CANCEL,
  ADD_DECIMAL,
  SHOW_RESULT,
} from "./types";

export const addDigit = (digit) => {
  return {
    type: ADD_DIGIT,
    payload: digit,
  };
};

export const multiply = () => {
  return {
    type: MULTIPLY,
  };
};

export const add = () => {
  return {
    type: ADD,
  };
};

export const subtract = () => {
  return {
    type: SUBTRACT,
  };
};

export const divide = () => {
  return {
    type: DIVIDE,
  };
};

export const addDecimal = () => {
  return {
    type: ADD_DECIMAL,
  };
};

export const showResult = () => {
  return {
    type: SHOW_RESULT,
  };
};

export const cancel = () => {
  return {
    type: CANCEL,
  };
};
