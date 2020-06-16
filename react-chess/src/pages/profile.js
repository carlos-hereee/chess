import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../stylesheets/profile.module.scss";

const status = {
	player: {
		name: "ch04937",
		stats: {
			win: 1,
			lose: 2,
			draw: 4,
		},
	},
};

export default function Profile() {
	return (
		<div className={styles.profile}>
			<div>
				<p>Profile Pic</p>
				<p>{status.player.name}</p>
				<p>stats</p>
				<p>Settings</p>
			</div>
			<div>Info</div>
		</div>
	);
}
