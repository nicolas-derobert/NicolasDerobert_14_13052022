import { Fragment } from "react";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./EmployeesList.css";

function EmployeesList() {
	return (
		<Fragment>
			<h1>Current Employees</h1>
			<Table title={"Les employés"}></Table>{" "}
			<Link to="/">
				<Button>Register New employee</Button>
			</Link>
		</Fragment>
	);
}
export default EmployeesList;
