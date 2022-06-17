import React, { Fragment } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import EmployeeForm from "../../components/employeeform/EmployeeForm";
import "./Home.css";

function Home() {
	return (
		<Fragment>
			<section>
				<div className="container">
					<h1>Create Employee</h1>
					<EmployeeForm></EmployeeForm>
				</div>
			</section>
		</Fragment>
	);
}

export default Home;
