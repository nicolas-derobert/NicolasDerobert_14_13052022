import React, { useState } from "react";
import { useEffect } from "react";
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";
import { useSelector } from "react-redux";

function TableRenderer(props) {
	const employeesArray = useSelector((state) => state.profile.employees);
console.log(employeesArray)
	const [colDefs, setColDefs] = useState();
	const [data, setData] = useState();

	const [tableData, setTableData] = useState([{
			firstName: "Nicolas",
			lastName: "DEROBERT",
			dateOfBirth: "",
			startDate: "",
			department: "Sales",
			street: "51 rue du centre",
			city: "Cruseilles",
			state: "AL",
			zipCode: "74350",
		},
		{
			firstName: "Nicolas",
			lastName: "DEROBERT",
			dateOfBirth: "",
			startDate: "",
			department: "Engineering",
			street: "51 rue du centre",
			city: "Cruseilles",
			state: "KY",
			zipCode: "74350",
		},
		{
			firstName: "Nicolas",
			lastName: "DEROBERT",
			dateOfBirth: "05/30/2022",
			startDate: "",
			department: "Sales",
			street: "51 rue du centre",
			city: "Cruseilles",
			state: "AL",
			zipCode: "74350",
		},
		// {
		// 	firstName: "ef",
		// 	lastName: "feddzs",
		// 	dateOfBirth: "05/17/2022",
		// 	startDate: "05/23/2022",
		// 	department: "Human Resources",
		// 	street: "51 rue du centre",
		// 	city: "Cruseilles",
		// 	state: "AS",
		// 	zipCode: "74350",
		// }
	]);
	const [columns, setColumns] = useState([
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
	// const columns = ;

	useEffect(() => {}, []);

	return (
		<div className="">
			<h1 align="center">React-App</h1>
			<h4 align="center">Import Data from Excel, CSV in Material Table</h4>
			{/* <div style={{ maxWidth: "100%" }}> */}
			<MaterialTable
				title={props.title}
				data={tableData}
				columns={columns}
				icons={tableIcons}
				options={{
					search: false,
				}}
			></MaterialTable>
			{/* <MaterialTable
          columns={[
            { title: "Adı", field: "name" },
            { title: "Soyadı", field: "surname" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
          ]}
          title="Demo Title"
        /> */}
			{/* </div> */}
		</div>
	);
}
export default TableRenderer;
