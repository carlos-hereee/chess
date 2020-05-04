import React, { useState, useEffect } from "react";

// import Board from "../data/board.json";

import styles from "../stylesheets/app.module.scss";

export default function Grid() {
	const [board, setboard] = useState();

	useEffect(async () => {
		function createBoard() {
			const board = [];
			for (let i = 0; i < 65; i++) {
				board.push({
					id: i,
				});
			}
			return board;
		}
		setboard(createBoard());
	}, []);
	console.log("board", board);
	return (
		<div className={styles.board}>
			{board &&
				board.map((data) => {
					return (
						<div key={data.id} className={styles.cell}>
							{data.id}
						</div>
					);
				})}
		</div>
	);
}
