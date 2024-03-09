import { useEffect, useState } from "react";
import "./App.css";
import { AuthRoutes } from "./allroutes/AuthRoutes";
import { Employee } from "./pages/Employee";
import { Manager } from "./pages/Manager";
import { EmployeeRoutes } from "./allroutes/EmployeeRoutes";
import { Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./allroutes/MainRoutes";

function App() {
  const [state, setState] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate=useNavigate()

  const handleState = () => {
    setState(!state);
  };

  useEffect(() => {
    // setState(!state);
  }, []);

  const handleRender = () => {
    if (user.role == "employee") {
       navigate("/employee")
   
    } else if (user.role == "manager") {
      navigate("/manager")
   
    }
  };
//console.log("appp")
  return (
    <div className="App">
      <Navbar/>



      
      {/* {user ? handleRender() : <Navigate to="/login"/>} */}

      {/* <AuthRoutes/>
      <EmployeeRoutes/> */}
      <MainRoutes/>
      
      </div>
  );
}

export default App;
