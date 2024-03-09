import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllExpense, updateExpense } from "../redux/expense/action";
import { Box, Button, ButtonGroup, Flex, Grid, Spacer, Text } from "@chakra-ui/react";

export const Pending = () => {
  // const [status, setStatus] = useState("pending");
  const dispatch = useDispatch();
  const { expenses, isLoading } = useSelector(
    (store) => store.expenseReducer,
    shallowEqual
  );
  console.log(expenses);

  const handleColor = (status) => {
    if (status == "pending") {
      return "yellow";
    } else if (status == "approved") {
      return "green";
    } else if (status == "rejected") {
      return "red";
    }
  };

  const handleUpdate=(id,text)=>{
    let obj={}
    if(text=="approve"){

      obj.expensestatus="approved"
    }else if(text=="reject"){
      obj.expensestatus="rejected"

    }

    dispatch(updateExpense(id,obj))

  }


  useEffect(() => {
    dispatch(getAllExpense);
  }, []);
  return (
    <div>
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
                  <b> Employee Name: </b>
                  {el.userName}
                </Text>
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

                <Flex>
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
                <Spacer />

               {
                el.expensestatus=="pending" && 


               <ButtonGroup mt="-2" zIndex={-1}>
                <Button colorScheme='green' zIndex={-1} onClick={()=>{handleUpdate(el._id,"approve")}}  >Approve</Button>
                <Button colorScheme='red' zIndex={-1} onClick={()=>{handleUpdate(el._id,"reject")}}>Reject</Button>

                </ButtonGroup>
               }

                </Flex>







                {/* <Text>
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
              {el.expensestatus=="pending" && <>
              
                <Button colorScheme='green' onClick={()=>{handleUpdate(el._id,"approve")}}  >Approve</Button>
                <Button colorScheme='red' onClick={()=>{handleUpdate(el._id,"reject")}}>Reject</Button>
              </>} */}
              </Box>
            );
          })}
      </Grid>
    </div>
  );
};
