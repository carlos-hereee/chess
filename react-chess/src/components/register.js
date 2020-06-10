import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Loader } from "semantic-ui-react";

import { AuthContext } from "../utils/context/Auth/AuthState";
import {
	validateEmail,
	validatePassword,
	validateUsername,
	validateConfirmPassword,
} from "../utils/validateAuth";

import styles from "../stylesheets/app.module.scss";

export default function Register() {
	const { isLoading, register } = useContext(AuthContext);
	return (
		<div className={styles.wrapper}>
			<h1>Register</h1>
			<Formik
				initialValues={{
					username: "",
					email: "",
					password: "",
					confirmPassword: "",
				}}
				onSubmit={(values, actions, { validate }) => {
					validate(values);
					register(values);
					actions.resetForm();
				}}
			>
				{({ errors, touched, validateForm, values }) => (
					<Form className={styles.form}>
						<br />
						{errors.username && touched.username && (
							<div className={styles.validate}>
								{errors.username}
							</div>
						)}
						<label>Username </label>
						<Field
							type="text"
							name="username"
							validate={validateUsername}
						/>
						<br />
						{errors.email && touched.email && (
							<div className={styles.validate}>
								{errors.email}
							</div>
						)}
						<label>Email </label>
						<Field
							type="text"
							name="email"
							validate={validateEmail}
						/>
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
						{errors.confirmPassword && touched.confirmPassword && (
							<div className={styles.validate}>
								{errors.confirmPassword}
							</div>
						)}
						<label>Confirm Password </label>
						<Field
							type="password"
							name="confirmPassword"
							validate={(value) =>
								validateConfirmPassword(values.password, value)
							}
						/>
						<br />
						<button type="submit" onClick={() => validateForm()}>
							{!isLoading ? "Register" : <Loader />}
						</button>
					</Form>
				)}
			</Formik>
			<br />
			<Link to="/login"> Already have an account? </Link>
		</div>
	);
}
