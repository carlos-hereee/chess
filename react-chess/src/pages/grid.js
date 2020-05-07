import React, { useState, useEffect, useContext } from "react";

import { ChessContext } from "../utils/context/ChessState";

import styles from "../stylesheets/app.module.scss";

export default function Grid() {
	const { newGame, chess } = useContext(ChessContext);

	useEffect(async () => {
		newGame();
	}, []);
	console.log("bboard", chess);
	return (
		<div className={styles.board}>
			{chess &&
				chess.map((data) => {
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
