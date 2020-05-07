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
							onClick={() => {
								console.log("e", data);
							}}
						>
							{data.piece}
						</div>
					);
				})}
		</div>
	);
}
