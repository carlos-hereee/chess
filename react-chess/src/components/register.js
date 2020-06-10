import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Loader } from "semantic-ui-react";

import { AuthContext } from "../utils/context/Auth/AuthState";
import {
	validateEmail,
	validatePassword,
	validateUsername,
	confirmPassword,
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
				{({ errors, touched, validateForm }) => (
					<Form className={styles.form}>
						{errors.username && touched.username && (
							<div className={styles.validate}>
								{errors.username}
							</div>
						)}
						<br />
						<label>Username </label>
						<Field
							type="text"
							name="username"
							validate={validateUsername}
						/>
						<br />
						<br />
						{errors.email && touched.email && (
							<div className={styles.validate}>
								{errors.email}
							</div>
						)}
						<br />
						<label>Email </label>
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
						<br />
						<label>Password </label>
						<Field
							type="password"
							name="password"
							validate={validatePassword}
						/>
						<br />
						<br />
						{errors.confirmPassword && touched.confirmPassword && (
							<div className={styles.validate}>
								{errors.confirmPassword}
							</div>
						)}
						<br />
						<label>Confirm Password </label>
						<Field
							type="password"
							name="confirmPassword"
							validatePassword={confirmPassword}
						/>
						<br />
						<button type="submit" onClick={() => validateForm()}>
							{!isLoading ? "Register" : <Loader />}
						</button>
					</Form>
				)}
			</Formik>
			<Link to="/login"> Already have an account? </Link>
		</div>
	);
}
