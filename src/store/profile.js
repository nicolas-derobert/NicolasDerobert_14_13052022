import { createSlice } from "@reduxjs/toolkit";


const initialProfileState = {
	firstName: localStorage.getItem("firstname"),
	// lastName: localStorage.getItem("lastName"),
	// dateOfBirth: localStorage.getItem("dateOfBirth"),
	// startDate: localStorage.getItem("startDate"),
	// department: localStorage.getItem("department"),
	// street: localStorage.getItem("street"),
	// city: localStorage.getItem("city"),
	// state: localStorage.getItem("state"),
	// zipCode: localStorage.getItem("zipCode"),
	employees: [],
};

const profileSlice = createSlice({
	name: "profile",
	initialState: initialProfileState,
	reducers: {
		setProfile(state, action) {
			state.firstName = action.payload.firstName;
			// state.lastName = action.payload.lastName;
			// state.dateOfBirth = action.payload.dateOfBirth;
			// state.startDate = action.payload.startDate;
			// state.department = action.payload.department;
			// state.street = action.payload.lastName;
			// state.city = action.payload.city;
			// state.state = action.payload.state;
			// state.zipCode = action.payload.zipCode;
			console.log(action.payload.firstName)
			// const employee = {
			// 	firstName: action.payload.firstName,
			// 	lastName: action.payload.lastName,
			// 	dateOfBirth: action.payload.dateOfBirth,
			// 	startDate: action.payload.startDate,
			// 	department: action.payload.department,
			// 	street: action.payload.lastName,
			// 	city: action.payload.city,
			// 	state: action.payload.state,
			// 	zipCode: action.payload.zipCode
			// }
			// state.employees.push(employee)
			state.employees = action.payload.employees
			console.log(state.employees)

			// state.firstName = action.payload.firstName;
			// state.lastName = action.payload.lastName;
			// state.dateOfBirth = action.payload.dateOfBirth;
			// state.startDate = action.payload.startDate;
			// state.department = action.payload.department;
			// state.street = action.payload.lastName;
			// state.city = action.payload.city;
			// state.state = action.payload.state;
			// state.zipCode = action.payload.zipCode;
			// localStorage.setItem("firstname", action.payload.firstName);
			// localStorage.setItem("lastname", action.payload.lastName);
		},
		removeProfile(state) {
			state.firstName = "";
			state.firstName = "";
			localStorage.removeItem("firstname");
			localStorage.removeItem("lastName");
		},
	},
});

export const authProfile = profileSlice.actions;

export default profileSlice.reducer;
