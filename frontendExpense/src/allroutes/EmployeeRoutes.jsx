import React from "react";
import { Route, Routes } from "react-router-dom";
import { ExpenseForm } from "../components/ExpenseForm";
import { EmployeePage } from "../components/EmployeePage";
import { Employee } from "../pages/Employee";
import { Manager } from "../pages/Manager";
import { Pending } from "../components/Pending";

export const EmployeeRoutes = ({ handleState }) => {
  return (
    <Routes>
      <Route element={<Employee  />}>
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/expense" element={<ExpenseForm />} />
      </Route>

      <Route path="/manager" element={<Manager />}>
        <Route index element={<Pending />} />
      </Route>
    </Routes>
  );
};
