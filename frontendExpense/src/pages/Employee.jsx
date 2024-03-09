import React from "react";
import { EmployeeRoutes } from "../allroutes/EmployeeRoutes";
import { Box, Button } from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Employee = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    // handleState();
  };
  return (
    <div>
      <Box
      
        bg={"teal"}
        pos="fixed"
      w="100vw"
      top="0"
      zIndex={10}
        h={"80px"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Link to={"/employee"} style={{ fontSize: "22px", color: "white" }}>
          Home
        </Link>
        <Link to={"/expense"} style={{ fontSize: "22px", color: "white" }}>
          Apply Expenses
        </Link>
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
      <Outlet />
    </div>
  );
};
