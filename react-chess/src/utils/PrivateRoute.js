import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (localStorage.getItem("accessToken")) {
					return <Component {...props} />;
				}
				return <Redirect to="/" />;
			}}
		/>
	);
}
