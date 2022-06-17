import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
	return (
		<section className="navbar">

				<NavLink
					to="/employee-list.html"
					className={({ isActive }) =>
						isActive ? "router-link-exact-active" : ""
					}
				>View Current Employees
				</NavLink>
								<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "router-link-exact-active" : ""
								}
							>Home

							</NavLink>
			

		</section>
	);
}

export default NavBar;
