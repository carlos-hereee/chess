import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Loader } from "semantic-ui-react";

import { AuthContext } from "../utils/context/Auth/AuthState";
import { validateEmail, validatePassword } from "../utils/validateAuth";

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
				onSubmit={(values, actions) => {
					register(values);
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
							name="username"
							validate={validateUsername}
						/>
						<br />
						<br />
						<label>Email </label>
						<Field type="text" name="email" />
						{errors.password && touched.password && (
							<div className={styles.validate}>
								{errors.password}
							</div>
						)}

						<label>Password </label>
						<Field type="password" name="password" />
						<label>Confirm Password </label>
						<Field type="password" name="confirmPassword" />
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
