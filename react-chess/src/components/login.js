import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Loader, Icon } from "semantic-ui-react";

import { AuthContext } from "../utils/context/Auth/AuthState";
import {
	validateEmailOrUsername,
	validatePassword,
} from "../utils/validateAuth";

import styles from "../stylesheets/auth.module.scss";

const SignIn = () => {
	const { isLoading, signIn } = useContext(AuthContext);
	const [canSeePassword, setCanSeePassword] = useState(false);

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
						<br />
						{errors.email && touched.email && (
							<div className={styles.validate}>
								{errors.email}
							</div>
						)}
						<label>Username </label>
						<Field
							type="text"
							name="email"
							validate={validateEmailOrUsername}
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
						<button type="submit" onClick={() => validateForm()}>
							{!isLoading ? "Sign In" : <Loader />}
						</button>
					</Form>
				)}
			</Formik>
			<br />
			<Link to="/register">Dont have an account?</Link>
		</div>
	);
};

export default SignIn;
