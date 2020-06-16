import React from "react";
import { Route, Switch } from "react-router-dom";

import Game from "./pages/game";
import Home from "./pages/home";
import Header from "./pages/header";
import Profile from "./pages/profile";
import Login from "./components/login";
import Register from "./components/register";
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
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<ChessState>
						<PrivateRoute path="/game" component={Game} />
						<PrivateRoute path="/user" component={Profile} />
					</ChessState>
				</Switch>
			</AuthState>
			<Fotter />
		</div>
	);
}

export default App;
