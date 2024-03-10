import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Manager = ({ handleState }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    // handleState();
  };
  return (
    <Box pos="fixed">
      <Box
      pos="fixed"
      w="100vw"
      top="0"
      zIndex={10}
        h={"80px"}
        bg={"teal"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Link to={"/manager"} style={{ fontSize: "22px", color: "white" }}>
          Requests
        </Link>
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
      <Outlet />
    </Box>
  );
};
