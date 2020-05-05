import React, { useState, useEffect } from "react";
import { createBoard } from "../components/createBoard";

import styles from "../stylesheets/app.module.scss";

export default function Grid() {
	const [board, setboard] = useState();
	const [newGame, setNewGame] = useState(true);

	useEffect(async () => {
		setboard(createBoard());
	}, [newGame]);
	return (
		<div className={styles.board}>
			{board &&
				board.map((data) => {
					return (
						<div
							key={data.id}
							className={styles.cell}
							// style={{
							// 	background:
							// 		data.id % 2 === 0 ? "white" : "black",
							// 	color: data.id % 2 === 0 ? "black" : "white",
							// }}
						>
							{data.piece}
						</div>
					);
				})}
		</div>
	);
}
