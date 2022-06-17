import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import EmployeesList from "./pages/employees-list/EmployeesList";
import ErrorPage from "./pages/erropage/ErroPage.js";

function AllRoutes() {

	return (
		<Routes>
			<Route path="/"  element={<Home/>} />
			<Route path="/employee-list.html" element={<EmployeesList/>} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
export default AllRoutes;
