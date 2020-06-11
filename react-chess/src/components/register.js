import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Loader, Icon } from "semantic-ui-react";

import { AuthContext } from "../utils/context/Auth/AuthState";
import {
	validateEmail,
	validatePassword,
	validateUsername,
	validateConfirmPassword,
} from "../utils/validateAuth";

import styles from "../stylesheets/auth.module.scss";

export default function Register() {
	const { isLoading, register } = useContext(AuthContext);
	const [canSeePassword, setCanSeePassword] = useState(false);
	const [canSeeConfirmPassword, setcanSeeConfirmPassword] = useState(false);

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
						<div className={styles.password}>
							<Field
								type={canSeePassword ? "text" : "password"}
								name="password"
								validate={validatePassword}
							/>
							<Icon
								size="big"
								className={styles.icon}
								name={canSeePassword ? "eye slash" : "eye"}
								onClick={() =>
									setCanSeePassword(!canSeePassword)
								}
							/>
						</div>
						<br />
						{errors.confirmPassword && touched.confirmPassword && (
							<div className={styles.validate}>
								{errors.confirmPassword}
							</div>
						)}
						<label>Confirm Password </label>
						<div className={styles.password}>
							<Field
								type={
									canSeeConfirmPassword ? "text" : "password"
								}
								name="confirmPassword"
								validate={(value) =>
									validateConfirmPassword(
										values.password,
										value
									)
								}
							/>
							<Icon
								size="big"
								className={styles.icon}
								name={
									canSeeConfirmPassword ? "eye slash" : "eye"
								}
								onClick={() =>
									setcanSeeConfirmPassword(
										!canSeeConfirmPassword
									)
								}
							/>
						</div>

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
