import React from "react";
import { Link } from "react-router-dom";

import styles from "../stylesheets/header_footer.module.scss";

export default function Header() {
	return (
		<div className={styles.header}>
			<Link to="/">Home</Link>
			<Link to="/user">Profile</Link>
		</div>
	);
}
