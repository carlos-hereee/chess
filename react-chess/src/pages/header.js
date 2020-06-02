import React from "react";
import { Link } from "react-router-dom";

import { removeState } from "../utils/localStorage";

import styles from "../stylesheets/header_footer.module.scss";

export default function Header() {
	const token = localStorage.getItem("token");

	function signOut() {
		removeState();
	}
	return (
		<>
			{token ? (
				<div className={styles.header}>
					<div>
						<Link to="/">Home</Link>
					</div>
					<div>
						<Link to="/user">Profile</Link>
					</div>
					<div onClick={signOut}>Sign Out</div>
				</div>
			) : (
				<div className={styles.header}>
					<Link to="/">Home</Link>
					<Link to="/login">Sign In</Link>
				</div>
			)}
		</>
	);
}
