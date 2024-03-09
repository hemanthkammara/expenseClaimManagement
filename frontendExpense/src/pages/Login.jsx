import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetAuth, userLoginfun } from "../redux/auth/action.js";
import { Loading } from "../components/Loading";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const { userData, token, isAuth, status, isLoading } = useSelector(
    (store) => store.authReducer,
    shallowEqual
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  if (isLoading) {
    return <Loading page={"70vh"} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLoginfun(user)).then((res) => {
      let status = res.data.msg;
      let user = res.data.user;

      if (status == "Login Successfull") {
        {
          toast({
            title: "Login Successfull",
            description: "user has logged in successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
        // console.log(location);
        // if (location.state == null) {
        //   console.log(true);
        //   navigate("/", { replace: true });
        // } else {
        //   navigate(location.state, { replace: true });
        // }

        if (user.role == "employee") {
          console.log("emp");
          navigate("/employee");
        } else if (user.role == "manager") {
          console.log("man");
          navigate("/manager");
        }
      } else if (
        status == "User dose not exist with this email please Register!"
      ) {
        {
          toast({
            title: "Please Register",
            description: "User dose not exist with this email please Register!",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
      } else if (status == "Wrong Password or Credentials!") {
        {
          toast({
            title: "Please check the details",
            description: "Wrong Password or Credentials!",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
        }
      }
    });
  };

  return (
    <Box
      w={{ base: "95%", md: "50%" }}
      m={"auto"}
      mt={10}
      p={{ base: 3, md: 20 }}
      borderRadius={"20px"}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      <Heading m={3}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl
          isRequired
          w={{ base: "100%", md: "70%" }}
          m={"auto"}
          p={{ base: "3%", md: "5%" }}
          borderRadius={"20px"}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          border={"0.5px solid lightgrey"}
          mb={5}
        >
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="email"
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            value={user.password}
            type="password"
            name="password"
            onChange={handleChange}
          />

          <Button
            backgroundColor={"#006fc9"}
            color={"white"}
            height={"50px"}
            borderRadius={"25px"}
            w={"50%"}
            display={"block"}
            m={"auto"}
            mt={10}
            type="submit"
            _hover={{
              backgroundColor: "#073d69",
            }}
          >
            Login
          </Button>
        </FormControl>
      </form>

      <Text fontSize={{ base: "xs", md: "lg" }}>
        Not have an Account?{" "}
        <Link to={"/register"} style={{ color: "blue", fontWeight: "700" }}>
          Signup
        </Link>
      </Text>
    </Box>
  );
};
