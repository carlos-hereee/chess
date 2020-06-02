import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Loader } from "semantic-ui-react";

import { AuthContext } from "../utils/context/Auth/AuthState";
import { validateEmail, validatePassword } from "../utils/validateAuth";

import styles from "../stylesheets/app.module.scss";

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
