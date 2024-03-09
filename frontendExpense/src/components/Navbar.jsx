import { Employee } from "../pages/Employee";
import { Manager } from "../pages/Manager";

export const Navbar=()=>{
    const user = JSON.parse(sessionStorage.getItem("user"));
    return(
        <>
        {user && user.role=="employee"?<Employee/>:""}
        {user && user.role=="manager"?<Manager/>:""}

        
        </>
    )
}