import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
//import { Button, ButtonGroup } from '@chakra-ui/react'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expense/action";
import { useNavigate } from "react-router-dom";

export const ExpenseForm = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [newExpense, setNewExpense] = useState({
    date: "",
    expensetype: "",
    description: "",
    expensestatus: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newExpense);
    dispatch(addExpense(newExpense)).then(()=>{
      navigate("/employee")
    })
  };

  return (
    <Box
      w={"50%"}
      m={"auto"}
      mt={20}
      p={10}
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      borderRadius={10}
    >
      <Heading mb={10}>Apply Expense</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl
          isRequired
          display={"flex"}
          flexDirection={"column"}
          gap={5}
        >
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <FormLabel>Expense Type</FormLabel>
          <Select
            placeholder="Expense Type"
            name="expensetype"
            value={newExpense.expensetype}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="travel">Travel</option>
            <option value="meal">Meal Expenses</option>
            <option value="training">Training and Education Expenses</option>
            <option value="transport">Transportation</option>
          </Select>
          <FormLabel>More Details</FormLabel>
          <Textarea
            placeholder="Please provide more details"
            name="description"
            value={newExpense.description}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Button type="submit" colorScheme="linkedin" w={"50%"} h={"50px"}>
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
