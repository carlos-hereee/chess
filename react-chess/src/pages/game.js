import React from "react";

import Chessboard from "chessboardjsx";

import styles from "../stylesheets/app.module.scss";

export default function Game() {
	return (
		<div className={styles.board}>
			<Chessboard position="start" />
		</div>
	);
}
