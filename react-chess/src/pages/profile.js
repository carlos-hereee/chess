import React from "react";

import styles from "../stylesheets/profile.module.scss";

// const status = {
// 	win: 1,
// 	lose: 2,
// 	draw: 4,
// };

export default function Profile() {
	return (
		<div className={styles.profile}>
			<div>
				<p>Profile Pic</p>
				<p>Name</p>
				<p>stats</p>
			</div>
			<div>the rest</div>
		</div>
	);
}
