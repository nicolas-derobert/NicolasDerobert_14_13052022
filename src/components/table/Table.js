import React, { useState, Suspense  } from "react";
import { useEffect } from "react";
// import MaterialTable from "material-table";
import tableIcons from "../../assets/data/MaterialTableIcons";
import { useSelector } from "react-redux";
import "./Table.css";
const MaterialTable = React.lazy(() => import("material-table"));

function Table(props) {
	const employeesArray = useSelector((state) => state.profile.employees);
	const tableDataEmployeesArray = employeesArray.map((o) => ({ ...o }));
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
		<div className="table">
			<div style={{ maxWidth: "80%", margin: "0rem auto" }}>
				<Suspense fallback={<div>Chargement...</div>}>
					<MaterialTable
						title={props.title}
						data={tableDataEmployeesArray}
						columns={columns}
						icons={tableIcons}
						options={{
							search: true,
						}}
					></MaterialTable>
				</Suspense>
			</div>
		</div>
	);
}
export default Table;
