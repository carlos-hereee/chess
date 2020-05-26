import React from "react";

import HasToken from "../components/hasToken";
import AuthPage from "../components/AuthPage";
export default function Home() {
	const token = localStorage.getItem("token");

	return <div>{token ? <HasToken /> : <AuthPage />}</div>;
}
