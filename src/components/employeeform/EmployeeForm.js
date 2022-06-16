import React, { Fragment, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { CustomMessageModal } from "custom-message-react-modal";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch } from "react-redux";
import { authProfile } from "../../store/profile";
import { useSelector } from "react-redux";
import { states } from "../../assets/data/state";
import { departmentOptions } from "../../assets/data/departmentOptions";
import Button from "@mui/material/Button";
import "./EmployeeForm.css";

function EmployeeForm() {
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
	const [dateOfBirth, setDateOfBirth] = useState();
	const [state, setState] = useState(defaultStatesOptions);
	const [departement, setDepartement] = useState(defaultDepartementOptions);

	const [ageMessage, setAgeMessage] = useState("");
	const [firstNameMessage, setFirstNameMessage] = useState("");
	const [lastNameMessage, setLastNameMessage] = useState("");
	// const checkBirthDate = (date) => {
	// 	let today = new Date();
	// 	let age = today - date
	// 	return date1 < date2;

	// 	if (date)
	// }

	function checkInputForm() {
		let formInpuTOk = true;
		console.log("firstNameInputRef");

		if (typeof dateOfBirth === "undefined") {
			setAgeMessage("Aucune date de naissance saisie");
			formInpuTOk = false;
		}
		if (getAge(dateOfBirth) < 16) {
			setAgeMessage("Personne trop jeune pour travailler");
			formInpuTOk = false;
		}
		if (firstNameInputRef.current.value === "") {
			setFirstNameMessage("Aucun prénom saisi saisie");
			formInpuTOk = false;
		}

		if (lastNameInputRef.current.value === "") {
			setLastNameMessage("Aucun nom saisi saisie");
			formInpuTOk = false;
		}
		return formInpuTOk;
	}
	function getAge(date) {
		var today = new Date();
		var birthDate = new Date(date);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	const submitHandler = (event) => {
		console.log(dateOfBirth);
		console.log(getAge(dateOfBirth));
		console.log(checkInputForm());

		if (checkInputForm() !== true) {
			setAgeMessage("Aucune date saisie");
		} else {
			setAgeMessage("");
			console.log("C'est ok");
			console.log("essi");
			console.log(departement);
			console.log(state);
			console.log(firstNameInputRef.current.value);
			console.log(`${lastNameInputRef.current.value}`);
			console.log(`${departement}`);
			console.log(`${streetInputRef.current.value}`);
			console.log(`${cityInputRef.current.value}`);
			console.log(`${state}`);
			console.log(`${zipCodeInputRef.current.value}`);
			console.log(startDate);
			console.log(dateOfBirth);
			const employee = {
				firstName: `${firstNameInputRef.current.value}`,
				lastName: `${lastNameInputRef.current.value}`,
				startDate: startDate ? `${startDate.toLocaleDateString("fr")}` : ``,
				department: `${departement}`,
				dateOfBirth: dateOfBirth
					? `${dateOfBirth.toLocaleDateString("fr")}`
					: ``,
				street: `${streetInputRef.current.value}`,
				city: `${cityInputRef.current.value}`,
				state: `${state}`,
				zipCode: `${zipCodeInputRef.current.value}`,
			};
			const employeesNewArray = employeesArray.slice();
			employeesNewArray.push(employee);
			console.log(employeesNewArray);
			dispatch(
				authProfile.setProfile({
					employees: employeesNewArray,
					firstName: `${firstNameInputRef.current.value}`,
				})
			);
		}
	};
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		submitHandler();
	};
	const handleClose = () => setOpen(false);

	return (
		<Fragment>
			<form action="#" id="create-employee" className="form">
				<div className="person">
					<label htmlFor="first-name">First Name</label>
					<input type="text" id="firstname" required ref={firstNameInputRef} />
					<p className="errormessage">{`${firstNameMessage}`}</p>
					<label htmlFor="last-name">Last Name</label>
					<input type="text" id="last-name" required ref={lastNameInputRef} />
					<p className="errormessage">{`${lastNameMessage}`}</p>

					<label htmlFor="date-of-birth">Date of Birth</label>
					<DatePicker
						id="date-of-birth"
						selected={dateOfBirth}
						onChange={(date) => setDateOfBirth(date)}
						// ref={dateOfBirthInputRef}
					/>
					<p className="errormessage">{`${ageMessage}`}</p>
					{/* <input id="date-of-birth" type="text" /> */}
					<label htmlFor="start-date">Start Date</label>
					<DatePicker
						id="start-date"
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						// ref={startDateInputRef}
					/>
				</div>
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
				<div>
					<label htmlFor="department">Department</label>
					<Dropdown
						options={departmentOptions}
						value={defaultDepartementOptions}
						placeholder="Select an option"
						// ref={departmentInputRef}
						onChange={(selection) => setDepartement(selection.value)}
					/>
				</div>
			</form>
			<Button onClick={handleOpen} className="buttonform">
				Save
			</Button>
			<CustomMessageModal
				isOpen={open}
				onRequestClose={handleClose}
				messageToDisplay={"Employee created"}
			></CustomMessageModal>
		</Fragment>
	);
}

export default EmployeeForm;
