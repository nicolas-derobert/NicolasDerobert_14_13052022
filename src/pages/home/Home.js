import React, { Fragment, useRef } from "react";
// import Jumbotron from "../../components/jumbotron/Jumbotron";
// import Gallery from "../../layouts/gallery/Gallery";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { CustomMessageModal } from "custom-message-react-modal";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch } from "react-redux";
import { authProfile } from "../../store/profile";
// import { useSelector } from "react-redux";

function Home() {
	const image = "jumbotron-image.jpg";
	const title = "Chez vous et partout ailleurs";
	const firstNameInputRef = useRef();
	const lastNameInputRef = useRef();
	const dateOfBirthInputRef = useRef();
	const startDateInputRef = useRef();
	const departmentInputRef = useRef();
	const streetInputRef = useRef();
	const cityInputRef = useRef();
	const stateInputRef = useRef();
	const zipCodeInputRef = useRef();
	const dispatch = useDispatch();
	const [startDate, setStartDate] = useState();
	const [startDateOfBirth, setStartDateOfBirth] = useState();

	const states = [
		{
			name: "Alabama",
			abbreviation: "AL",
		},
		{
			name: "Alaska",
			abbreviation: "AK",
		},
		{
			name: "American Samoa",
			abbreviation: "AS",
		},
		{
			name: "Arizona",
			abbreviation: "AZ",
		},
		{
			name: "Arkansas",
			abbreviation: "AR",
		},
		{
			name: "California",
			abbreviation: "CA",
		},
		{
			name: "Colorado",
			abbreviation: "CO",
		},
		{
			name: "Connecticut",
			abbreviation: "CT",
		},
		{
			name: "Delaware",
			abbreviation: "DE",
		},
		{
			name: "District Of Columbia",
			abbreviation: "DC",
		},
		{
			name: "Federated States Of Micronesia",
			abbreviation: "FM",
		},
		{
			name: "Florida",
			abbreviation: "FL",
		},
		{
			name: "Georgia",
			abbreviation: "GA",
		},
		{
			name: "Guam",
			abbreviation: "GU",
		},
		{
			name: "Hawaii",
			abbreviation: "HI",
		},
		{
			name: "Idaho",
			abbreviation: "ID",
		},
		{
			name: "Illinois",
			abbreviation: "IL",
		},
		{
			name: "Indiana",
			abbreviation: "IN",
		},
		{
			name: "Iowa",
			abbreviation: "IA",
		},
		{
			name: "Kansas",
			abbreviation: "KS",
		},
		{
			name: "Kentucky",
			abbreviation: "KY",
		},
		{
			name: "Louisiana",
			abbreviation: "LA",
		},
		{
			name: "Maine",
			abbreviation: "ME",
		},
		{
			name: "Marshall Islands",
			abbreviation: "MH",
		},
		{
			name: "Maryland",
			abbreviation: "MD",
		},
		{
			name: "Massachusetts",
			abbreviation: "MA",
		},
		{
			name: "Michigan",
			abbreviation: "MI",
		},
		{
			name: "Minnesota",
			abbreviation: "MN",
		},
		{
			name: "Mississippi",
			abbreviation: "MS",
		},
		{
			name: "Missouri",
			abbreviation: "MO",
		},
		{
			name: "Montana",
			abbreviation: "MT",
		},
		{
			name: "Nebraska",
			abbreviation: "NE",
		},
		{
			name: "Nevada",
			abbreviation: "NV",
		},
		{
			name: "New Hampshire",
			abbreviation: "NH",
		},
		{
			name: "New Jersey",
			abbreviation: "NJ",
		},
		{
			name: "New Mexico",
			abbreviation: "NM",
		},
		{
			name: "New York",
			abbreviation: "NY",
		},
		{
			name: "North Carolina",
			abbreviation: "NC",
		},
		{
			name: "North Dakota",
			abbreviation: "ND",
		},
		{
			name: "Northern Mariana Islands",
			abbreviation: "MP",
		},
		{
			name: "Ohio",
			abbreviation: "OH",
		},
		{
			name: "Oklahoma",
			abbreviation: "OK",
		},
		{
			name: "Oregon",
			abbreviation: "OR",
		},
		{
			name: "Palau",
			abbreviation: "PW",
		},
		{
			name: "Pennsylvania",
			abbreviation: "PA",
		},
		{
			name: "Puerto Rico",
			abbreviation: "PR",
		},
		{
			name: "Rhode Island",
			abbreviation: "RI",
		},
		{
			name: "South Carolina",
			abbreviation: "SC",
		},
		{
			name: "South Dakota",
			abbreviation: "SD",
		},
		{
			name: "Tennessee",
			abbreviation: "TN",
		},
		{
			name: "Texas",
			abbreviation: "TX",
		},
		{
			name: "Utah",
			abbreviation: "UT",
		},
		{
			name: "Vermont",
			abbreviation: "VT",
		},
		{
			name: "Virgin Islands",
			abbreviation: "VI",
		},
		{
			name: "Virginia",
			abbreviation: "VA",
		},
		{
			name: "Washington",
			abbreviation: "WA",
		},
		{
			name: "West Virginia",
			abbreviation: "WV",
		},
		{
			name: "Wisconsin",
			abbreviation: "WI",
		},
		{
			name: "Wyoming",
			abbreviation: "WY",
		},
	];
	const statesOptions = states.map(function (obj) {
		return obj.name;
	});
	const departmentOptions = [
		"Sales",
		"Marketing",
		"Engineering",
		"Human Resources",
		"Legal",
	];
	const defaultStatesOptions = statesOptions[0];
	console.log(defaultStatesOptions)
	const defaultDepartementOptions = departmentOptions[0];
	const submitHandler = (event) => {
		console.log("essi")
		dispatch(
			authProfile.setProfile({
				firstName: `${firstNameInputRef.current.value}`,
				lastName: `${lastNameInputRef.current.value}`,
				dateOfBirth: `${dateOfBirthInputRef.current.value}`,
				startDate: `${startDateInputRef.current.value}`,
				department: `${departmentInputRef.current.value}`,
				street: `${streetInputRef.current.value}`,
				city: `${cityInputRef.current.value}`,
				state: `${stateInputRef.current.value}`,
				zipCode: `${zipCodeInputRef.current.value}`,
			})
		);
	};
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
		submitHandler()
	}
	const handleClose = () => setOpen(false);

	return (
		<Fragment>
			<section>
				<div className="">
					<h1>HRnet</h1>
				</div>
				<div className="container">
					<a href="employee-list.html">View Current Employees</a>
					<h2>Create Employee</h2>
					<form action="#" id="create-employee" onSubmit={submitHandler}>
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
							ref={dateOfBirthInputRef}
						/>
						{/* <input id="date-of-birth" type="text" /> */}
						<label htmlFor="start-date">Start Date</label>
						<DatePicker
							id="start-date"
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							ref={startDateInputRef}
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
								ref={stateInputRef} 
							/>
							{/* <Dropdown disabled onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
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
						ref={departmentInputRef} 
						
					/>
			<CustomMessageModal
				isOpen={open}
				onRequestClose={handleClose}
				messageToDisplay={"Message to display"}
			></CustomMessageModal>
					{/* <button type="submit">Save</button> */}
					<button onClick={handleOpen}>Hello</button>
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
