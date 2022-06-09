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

function Home() {
	const firstNameInputRef = useRef();
	const lastNameInputRef = useRef();
	// const dateOfBirthInputRef = useRef();
	// const startDateInputRef = useRef();
	// const departmentInputRef = useRef();
	const streetInputRef = useRef();
	const cityInputRef = useRef();
	// const stateInputRef = useRef();
	const zipCodeInputRef = useRef();
	const dispatch = useDispatch();

	const employeesArray = useSelector((state) => state.profile.employees);
	const statesOptions = states.map(function (obj) {
		return obj.name;
	});

	const defaultStatesOptions = statesOptions[0];
	const defaultDepartementOptions = departmentOptions[0];
	const [startDate, setStartDate] = useState();
	let formatedStartDate = ""

	const [startDateOfBirth, setStartDateOfBirth] = useState();
	let formatedStartDateOfBirth = ""

	const [state, setState] = useState(defaultStatesOptions);
	const [departement, setDepartement] = useState(defaultDepartementOptions);
	const submitHandler = (event) => {
		console.log("essi");
		console.log(departement);
		console.log(state);
		console.log(firstNameInputRef.current.value);
		console.log(`${lastNameInputRef.current.value}`);
		console.log(`${startDateOfBirth.toLocaleDateString("fr")}`);
		console.log(`${departement}`);
		console.log(`${streetInputRef.current.value}`);
		console.log(`${cityInputRef.current.value}`);
		console.log(`${state}`);
		console.log(`${zipCodeInputRef.current.value}`);
		if (startDate !== "") {
			formatedStartDate = startDate.toLocaleDateString("fr");
		}
		if (startDateOfBirth !== "") {
			formatedStartDateOfBirth = startDateOfBirth.toLocaleDateString("fr");
	   }
		const employee = {
			firstName: `${firstNameInputRef.current.value}`,
			lastName: `${lastNameInputRef.current.value}`,
			dateOfBirth: `${formatedStartDateOfBirth}`,
			startDate: `${formatedStartDate}`,
			department: `${departement}`,
			street: `${streetInputRef.current.value}`,
			city: `${cityInputRef.current.value}`,
			state: `${state}`,
			zipCode: `${zipCodeInputRef.current.value}`,
		};
		console.log(firstNameInputRef.current.value);

		const employeesNewArray = employeesArray.slice();
		employeesNewArray.push(employee);
		console.log(employeesNewArray);
		dispatch(
			authProfile.setProfile({
				employees: employeesNewArray,
				firstName: `${firstNameInputRef.current.value}`,
				// lastName: `${lastNameInputRef.current.value}`,
				// dateOfBirth: `${dateOfBirthInputRef.current.value}`,
				// startDate: `${startDateInputRef.current.value}`,
				// department: `${departmentInputRef.current.value}`,
				// street: `${streetInputRef.current.value}`,
				// city: `${cityInputRef.current.value}`,
				// state: `${stateInputRef.current.value}`,
				// zipCode: `${zipCodeInputRef.current.value}`,
			})
		);
	};
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		submitHandler();
	};
	const handleClose = () => setOpen(false);

	return (
		<Fragment>
			<section>
				<div className="">
					<h1>HRnet</h1>
				</div>
				<div className="container">
					<Link to="/employee-list.html">View Current Employees</Link>
					<h2>Create Employee</h2>
					<form action="#" id="create-employee">
						<label htmlFor="first-name">First Name</label>
						<input
							type="text"
							id="firstname"
							required
							ref={firstNameInputRef}
						/>
						{/* <input type="text" id="first-name" /> */}
						<label htmlFor="last-name">Last Name</label>
						<input type="text" id="last-name" required ref={lastNameInputRef} />

						<label htmlFor="date-of-birth">Date of Birth</label>
						<DatePicker
							id="date-of-birth"
							selected={startDateOfBirth}
							onChange={(date) => setStartDateOfBirth(date)}
							// ref={dateOfBirthInputRef}
						/>
						{/* <input id="date-of-birth" type="text" /> */}
						<label htmlFor="start-date">Start Date</label>
						<DatePicker
							id="start-date"
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							// ref={startDateInputRef}
						/>
						{/* <input type="text" /> */}
						<fieldset className="address">
							<legend>Address</legend>
							<label htmlFor="street">Street</label>
							<input id="street" type="text" ref={streetInputRef} />
							<label htmlFor="city">City</label>
							<input id="city" type="text" ref={cityInputRef} />
							<label htmlFor="state">State</label>
							<Dropdown
								options={statesOptions}
								value={defaultStatesOptions}
								placeholder="Select an option"
								// onChange={setState}
								onChange={(selection) => setState(selection.value)}
							/>
							<label htmlFor="zip-code">Zip Code</label>
							<input id="zip-code" type="number" ref={zipCodeInputRef} />
						</fieldset>
						<label htmlFor="department">Department</label>
						{/* <select name="department" id="department" ref={firstNameInputRef}>
						</select> */}
					</form>
					<Dropdown
						options={departmentOptions}
						value={defaultDepartementOptions}
						placeholder="Select an option"
						// ref={departmentInputRef}
						onChange={(selection) => setDepartement(selection.value)}
					/>
					<button onClick={handleOpen}>Save</button>

					<CustomMessageModal
						isOpen={open}
						onRequestClose={handleClose}
						messageToDisplay={"Message to display2"}
					></CustomMessageModal>
					{/* <button type="submit">Save</button> */}
				</div>
				{/* <div id="confirmation" className="modal">
					Employee Created!
				</div> */}
			</section>
			{/* <Jumbotron title={title} imageurl={image} ></Jumbotron>
			<Gallery></Gallery> */}
		</Fragment>
	);
}

export default Home;
