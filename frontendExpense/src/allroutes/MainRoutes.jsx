import { Route, Routes } from "react-router-dom"
import { EmployeePage } from "../components/EmployeePage"
import { ExpenseForm } from "../components/ExpenseForm"
import { Pending } from "../components/Pending"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"
import { Dummy } from "../components/Dummy"
import { Home } from "../pages/Home"

export const MainRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/expense" element={<ExpenseForm />} />
          <Route path="manager" element={<Pending />} />
          <Route path="dummy" element={<Dummy/>}/>
     
      </Routes>
    )
}