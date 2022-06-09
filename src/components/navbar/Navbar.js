import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import { authActions } from "../../store/auth";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import Button from "@mui/material/Button";
// import { FaUserCircle } from "react-icons/fa";
// import { RiLogoutBoxRLine } from "react-icons/ri";

function NavBar() {
	// const firstNameProfile = useSelector((state) => state.profile.firstName);
	// const isAuth = useSelector((state) => state.auth.isAuthenticated);
	// const dispatch = useDispatch();

	return (
		<section className="navbar">

				<NavLink
					to="/employee-list.html"
					className={({ isActive }) =>
						isActive ? "router-link-exact-active" : ""
					}
				>View Current Employees
					{/* <Button
						size="medium"
						startIcon={<FaUserCircle />}
						className="main-nav-item"
					>
						Sign In
					</Button> */}
				</NavLink>
								<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "router-link-exact-active" : ""
								}
							>Home
								{/* <Button
									size="medium"
									startIcon={<FaUserCircle />}
									className="main-nav-item"
								>
									Sign In
								</Button> */}
							</NavLink>
			

		</section>
	);
}

export default NavBar;
