import React, { Fragment } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import EmployeeForm from "../../components/employeeform/EmployeeForm";
import "./Home.css";

function Home() {
	return (
		<Fragment>
			<section>
				{/* <div className="">
					<h1>HRnet</h1>
				</div> */}
				<div className="container">
					{/* <Link to="/employee-list.html">View Current Employees</Link> */}
					<h1>Create Employee</h1>
					<EmployeeForm></EmployeeForm>
				</div>
			</section>
		</Fragment>
	);
}

export default Home;
