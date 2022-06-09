import React from "react";
import NavBar from "../../components/navbar/Navbar";
import Logo from "../../assets/images/wealthhealth.jpg";
import "./Header.css";

function Header() {
	return (
		<header className="header">
			<div className="main-nav-logo">
				<img src={Logo} alt="Logo" className="main-nav-logo-image" />
				<p className="websitename" data-element-id="headingsMap-0">
					HRnet
				</p>
			</div>
			<NavBar></NavBar>
		</header>
	);
}

export default Header;
