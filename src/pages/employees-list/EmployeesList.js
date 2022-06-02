import { Fragment, useState, useRef, useEffect } from "react";
import TableRenderer from "../../components/TableRenderer/TableRenderer";

function EmployeesList() {


	return (
		<Fragment>
			<h1>Hello</h1>
			<TableRenderer title={"Les employés"}></TableRenderer>
		</Fragment>
	);
}
export default EmployeesList;


