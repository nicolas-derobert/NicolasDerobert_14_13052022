import React, { Fragment, useRef, useState } from "react";
// import Jumbotron from "../../components/jumbotron/Jumbotron";
// import Gallery from "../../layouts/gallery/Gallery";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { CustomMessageModal } from "custom-message-react-modal";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch } from "react-redux";
import { authProfile } from "../../store/profile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { states } from "../../assets/data/state";
import { departmentOptions } from "../../assets/data/departmentOptions";
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
