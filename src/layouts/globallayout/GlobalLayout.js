import React, { Fragment } from "react";
import Header from "../../layouts/header/Header";
import "./GlobalLayout.css";
import "../../App.css";

function GlobalLayout(props) {
	return (
		<Fragment>
			<div className="app">
				<Header></Header>
				<main className="GlobalLayout main">{props.children}</main>
				{/* <Footer></Footer> */}
			</div>
		</Fragment>
	);
}

export default GlobalLayout;
