import React from "react";

import HasToken from "../components/hasToken";
import NoToken from "../components/noToken";
export default function Home() {
	const token = localStorage.getItem("token");

	return <div>{token ? <HasToken /> : <NoToken />}</div>;
}
