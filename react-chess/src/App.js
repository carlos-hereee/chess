import React from "react";
import { Route } from "react-router-dom";

import Game from "./pages/game";
import Home from "./pages/home";

import PrivateRoute from "./utils/PrivateRoute";
import { ChessState } from "./utils/context/ChessState";

import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Chess App</h1>
			<Route exact path="/" component={Home} />
			<PrivateRoute path="/game">
				<ChessState>
					<Game />
				</ChessState>
			</PrivateRoute>
		</div>
	);
}

export default App;
