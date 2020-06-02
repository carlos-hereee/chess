import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { Loader } from "semantic-ui-react";

import { AuthContext } from "../utils/context/Auth/AuthState";

import styles from "../stylesheets/app.module.scss";
import { Link } from "react-router-dom";

function validateEmail(value) {
	let error;
	if (!value) {
		error = "*Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = "*Invalid email address";
	}
	return error;
}
function validatePassword(values) {
	let error = {};
	const passwordRegex = /(?=.*[0-9])/;
	if (!values) {
		error = "*Required";
	} else if (values.length < 8) {
		error = "*Password must be 8 characters long.";
	} else if (!passwordRegex.test(values)) {
		error = "*Invalid password. Must contain one number.";
	}
	return error;
}
const SignIn = () => {
	const { isLoading, signIn } = useContext(AuthContext);
	return (
		<div className={styles.wrapper}>
			<h1>Login</h1>
			<Formik
				initialValues={{ username: "", password: "" }}
				onSubmit={(values, actions) => {
					signIn(values);
					actions.resetForm();
				}}
			>
				{({ errors, touched, validateForm }) => (
					<Form className={styles.form}>
						{errors.email && touched.email && (
							<div className={styles.validate}>
								{errors.email}
							</div>
						)}
						<br />
						<label>Username </label>
						<Field
							type="text"
							name="email"
							validate={validateEmail}
						/>
						<br />
						<br />
						{errors.password && touched.password && (
							<div className={styles.validate}>
								{errors.password}
							</div>
						)}
						<label>Password </label>
						<Field
							type="password"
							name="password"
							validate={validatePassword}
						/>
						<br />
						<button type="submit" onClick={() => validateForm()}>
							{!isLoading ? "Sign In" : <Loader />}
						</button>
					</Form>
				)}
			</Formik>
			<Link to="/register">Dont have an account?</Link>
		</div>
	);
};

export default SignIn;
