import React from "react";
import { Route } from "react-router-dom";

import Game from "./pages/game";
import Home from "./pages/home";

import PrivateRoute from "./utils/PrivateRoute";
import { ChessState } from "./utils/context/Chess/ChessState";

import "./App.css";
import Profile from "./pages/profile";

function App() {
	return (
		<div className="App">
			<h1>Chess App</h1>
			<Route exact path="/" component={Home} />
			<Route path="/user" component={Profile} />
			<PrivateRoute path="/game">
				<ChessState>
					<Game />
				</ChessState>
			</PrivateRoute>
		</div>
	);
}

export default App;
