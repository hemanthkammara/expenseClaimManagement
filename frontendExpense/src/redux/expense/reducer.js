import {
  EXPENSE_FAILURE,
  EXPENSE_REQUEST,
  EXPENSE_SUCCESS,
} from "./actiontype";

const initialState = {
  isLoading: false,
  isError: false,
  expenses: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EXPENSE_REQUEST:
      return { ...state, isLoading: true };
    case EXPENSE_SUCCESS:
      return { ...state, isLoading: false, expenses: payload };
    case EXPENSE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
