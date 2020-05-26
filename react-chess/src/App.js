import React from "react";
import { Route } from "react-router-dom";

import Game from "./pages/game";
import Home from "./pages/home";
import Header from "./pages/header";
import Profile from "./pages/profile";
import Fotter from "./pages/footer";

import PrivateRoute from "./utils/PrivateRoute";
import { ChessState } from "./utils/context/Chess/ChessState";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<h1>Chess App</h1>
			<Route exact path="/" component={Home} />
			<Route path="/user" component={Profile} />
			<PrivateRoute path="/game">
				<ChessState>
					<Game />
				</ChessState>
			</PrivateRoute>
			<Fotter />
		</div>
	);
}

export default App;
