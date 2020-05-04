import React, { useState, useEffect } from "react";

// import Board from "../data/board.json";

import styles from "../stylesheets/app.module.scss";

export default function Grid() {
	const [board, setboard] = useState();

	useEffect(async () => {
		function createBoard() {
			const board = [];
			for (let i = 0; i < 63; i++) {
				board.push({
					id: i,
				});
			}
			return board;
		}
		setboard(createBoard());
	}, []);
	return (
		<div className={styles.board}>
			{board &&
				board.map((data) => {
					return (
						<div
							key={data.id}
							className={styles.cell}
							style={{
								background:
									data.id % 2 === 0 ? "white" : "black",
								color: data.id % 2 == 0 ? "black" : "white",
							}}
						></div>
					);
				})}
		</div>
	);
}
