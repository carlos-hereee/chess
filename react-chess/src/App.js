import React from "react";
import Grid from "./pages/grid";

import { ChessState } from "./utils/context/ChessState";

import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Chess App</h1>
			<ChessState>
				<Grid />
			</ChessState>
		</div>
	);
}

export default App;
