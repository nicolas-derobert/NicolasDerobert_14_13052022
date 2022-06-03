import { Fragment, useState, useRef, useEffect } from "react";
import TableRenderer from "../../components/TableRenderer/TableRenderer";
import { Link } from "react-router-dom";

function EmployeesList() {
	return (
		<Fragment>
			<h1>Current Employees
			</h1>
			<TableRenderer title={"Les employés"}></TableRenderer>				<Link to="/"> register New employee</Link>

		</Fragment>
	);
}
export default EmployeesList;
