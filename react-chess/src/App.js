import React from "react";
import { Route } from "react-router-dom";

import Game from "./pages/game";
import Home from "./pages/home";
import Header from "./pages/header";
import Profile from "./pages/profile";
import Fotter from "./pages/footer";

import PrivateRoute from "./utils/PrivateRoute";
import { AuthState } from "./utils/context/Auth/AuthState";
import { ChessState } from "./utils/context/Chess/ChessState";

import styles from "./stylesheets/app.module.scss";

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<AuthState>
				<h1>Chess App</h1>
				<Route exact path="/" component={Home} />
				<Route path="/user" component={Profile} />
				<PrivateRoute path="/game">
					<ChessState>
						<Game />
					</ChessState>
				</PrivateRoute>
			</AuthState>
			<Fotter />
		</div>
	);
}

export default App;
