import React from "react";
import { Link } from "react-router-dom";

import HasToken from "../components/hasToken";

import style from "../stylesheets/home.module.scss";

export default function Home() {
	const token = localStorage.getItem("token");

	return (
		<div>
			{token ? (
				<HasToken />
			) : (
				<div className={style.home}>
					<div>
						Would you like to play as a
						<Link to="/guest"> Guest</Link>
					</div>
					<br />
					<br />
					<div>
						<Link to="/login">Login </Link> or
						<Link to="/register">Register </Link>
					</div>
				</div>
			)}
		</div>
	);
}
