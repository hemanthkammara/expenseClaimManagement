import { Navigate, useNavigate } from "react-router-dom";

export const Home=()=>{
    const user = JSON.parse(sessionStorage.getItem("user"));
    const navigate=useNavigate();

    const handleRender = () => {
        if (user.role == "employee") {
           navigate("/employee")
         // return <Employee handleState={handleState} />;
        } else if (user.role == "manager") {
          navigate("/manager")
         // return <Manager handleState={handleState} />;
        }
      };
console.log("home")
return(
    <>
    {user ? handleRender() : <Navigate to="/login"/>}
    
    </>
)
}