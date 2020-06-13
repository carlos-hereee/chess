import React from "react";

import styles from "../stylesheets/header_footer.module.scss";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<p>Copyright ©{new Date().getFullYear()}. All rights reserved</p>
		</div>
	);
}
