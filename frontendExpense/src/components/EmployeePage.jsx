import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getExpense } from "../redux/expense/action";
import { compose } from "redux";

export const EmployeePage = () => {
  const dispatch = useDispatch();
  const { expenses, isLoading } = useSelector(
    (store) => store.expenseReducer,
    shallowEqual
  );
  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleColor = (status) => {
    if (status == "pending") {
      return "yellow";
    } else if (status == "approved") {
      return "green";
    } else if (status == "rejected") {
      return "red";
    }
  };

  useEffect(() => {
    dispatch(getExpense(user._id));
  }, []);

  console.log(expenses,"employee page");
  return (
    <Box>
      <Heading>Expenses</Heading>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={6}
        w={"70%"}
        m={"auto"}
        mt={20}
      >
        {expenses.length > 0 &&
          expenses.map((el, i) => {
            return (
              <Box
                key={i}
                p={5}
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                textAlign={"left"}
                display={"flex"}
                flexDirection={"column"}
                gap={5}
                borderRadius={10}
              >
                <Text>
                  <b>Expense Type: </b>
                  {el.expensetype}
                </Text>
                <Text>
                  <b>Details: </b>
                  {el.description}
                </Text>
                <Text>
                  <b>Created on:</b>
                  {new Date(el.createdAt).toLocaleString()}
                </Text>
                <Text>
                  <b>Status: </b>
                  <span
                    style={{
                      backgroundColor: handleColor(el.expensestatus),
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    {el.expensestatus}
                  </span>
                </Text>
              </Box>
            );
          })}
      </Grid>
    </Box>
  );
};
