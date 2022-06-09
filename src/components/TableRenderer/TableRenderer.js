import React, { useState } from "react";
import { useEffect } from "react";
import MaterialTable from "material-table";
import tableIcons from "../../assets/data/MaterialTableIcons";
import { useSelector } from "react-redux";

function TableRenderer(props) {
	const employeesArray = useSelector((state) => state.profile.employees);
	const firstNameProfile = useSelector((state) => state.profile.firstName);
	console.log(firstNameProfile);
	// const [colDefs, setColDefs] = useState();
	// const [data, setData] = useState();
	// const [tableDataEmployeesArray, setTableDataEmployeesArray] = useState();
	const tableDataEmployeesArray = employeesArray.map((o) => ({ ...o }));
	console.log(tableDataEmployeesArray);

	// const [tableData, setTableData] = useState([
	// 	{
	// 		firstName: "Nicolas",
	// 		lastName: "DEROBERT",
	// 		dateOfBirth: "",
	// 		startDate: "",
	// 		department: "Sales",
	// 		street: "51 rue du centre",
	// 		city: "Cruseilles",
	// 		state: "AL",
	// 		zipCode: "74350",
	// 	},
	// 	{
	// 		firstName: "Nicolas",
	// 		lastName: "DEROBERT",
	// 		dateOfBirth: "",
	// 		startDate: "",
	// 		department: "Engineering",
	// 		street: "51 rue du centre",
	// 		city: "Cruseilles",
	// 		state: "KY",
	// 		zipCode: "74350",
	// 	},
	// 	{
	// 		city: "Cruseilles",
	// 		dateOfBirth: "undefined",
	// 		department: "undefined",
	// 		firstName: "Nicolas",colDefs
	// 		lastName: "DEROBERT",
	// 		startDate: "undefined",
	// 		state: "undefined",
	// 		street: "51 rue du centre",
	// 		zipCode: "74350",
	// 	},
	// 			{
	// 		firstName: "Nicolas",
	// 		lastName: "DEROBERT",
	// 		dateOfBirth: "05/30/2022",
	// 		startDate: "",
	// 		department: "Sales",
	// 		street: "51 rue du centre",
	// 		city: "Cruseilles",
	// 		state: "AL",
	// 		zipCode: "74350",
	// 	},
	// 	// {
	// 	// 	firstName: "ef",
	// 	// 	lastName: "feddzs",
	// 	// 	dateOfBirth: "05/17/2022",
	// 	// 	startDate: "05/23/2022",
	// 	// 	department: "Human Resources",
	// 	// 	street: "51 rue du centre",
	// 	// 	city: "Cruseilles",
	// 	// 	state: "AS",
	// 	// 	zipCode: "74350",
	// 	// }
	// ]);
	// console.log(tableData);

	const [columns] = useState([
		{ title: "First Name", field: "firstName" },
		{ title: "Last Name", field: "lastName" },
		{ title: "Start Date", field: "startDate" },
		{ title: "Department", field: "department" },
		{ title: "Date Of Birth", field: "dateOfBirth" },
		{ title: "Street", field: "street" },
		{ title: "City", field: "city" },
		{ title: "State", field: "state" },
		{ title: "Zip Code", field: "zipCode" },
	]);

	useEffect(() => {}, []);

	return (
		<div className="">
			<div style={{ maxWidth: "80%", margin: "2rem auto" }}>
				<MaterialTable
					title={props.title}
					data={tableDataEmployeesArray}
					columns={columns}
					icons={tableIcons}
					options={{
						search: true,
					}}
				></MaterialTable>
			</div>
		</div>
	);
}
export default TableRenderer;
