import axios from "axios";
import {
  EXPENSE_FAILURE,
  EXPENSE_REQUEST,
  EXPENSE_SUCCESS,
} from "./actiontype";

export const getExpense = (id) => async (dispatch) => {
  dispatch({ type: EXPENSE_REQUEST });
  console.log(id);
  try {
    const res = await axios.get(`https://expenseclaimmanagementbackend.onrender.com/employee/${id}`);

    dispatch({ type: EXPENSE_SUCCESS, payload: res.data.expenses });
  } catch (error) {
    dispatch({ type: EXPENSE_FAILURE });
  }
};

export const getAllExpense = async (dispatch) => {
  dispatch({ type: EXPENSE_REQUEST });
  try {
    const res = await axios.get(`https://expenseclaimmanagementbackend.onrender.com/manager`);
    dispatch({ type: EXPENSE_SUCCESS, payload: res.data.expenses });
    console.log(res.data);
  } catch (error) {
    dispatch({ type: EXPENSE_FAILURE });
  }
};

export const addExpense = (expense) => async (dispatch) => {
  dispatch({ type: EXPENSE_REQUEST });
  const token = JSON.parse(sessionStorage.getItem("token"));
  console.log(expense);

  try {
    const res = await axios.post(`https://expenseclaimmanagementbackend.onrender.com/expense`, expense, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: EXPENSE_SUCCESS, payload: res.data });
    return res;
  } catch (err) {
    dispatch({ type: EXPENSE_FAILURE, payload: err });
  }
};

export const updateExpense=(id,data)=>(dispatch)=>{
 axios.patch(`https://expenseclaimmanagementbackend.onrender.com/expense/${id}`,data)
 .then((res)=>{
  dispatch(getAllExpense)
 })
 .catch((err)=>{
  console.log(err)
 })
}
