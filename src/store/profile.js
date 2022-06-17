import { createSlice } from "@reduxjs/toolkit";


const initialProfileState = {
	employees: [],
};

const profileSlice = createSlice({
	name: "profile",
	initialState: initialProfileState,
	reducers: {
		setProfile(state, action) {
			state.employees = action.payload.employees
		},
	},
});

export const authProfile = profileSlice.actions;

export default profileSlice.reducer;
