import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Loader } from "semantic-ui-react";
import * as Yup from "yup";

import { AuthContext } from "../../utils/context/auth/authState";

import styles from "../../stylesheets/pages.module.scss";
import { Link } from "react-router-dom";

const SignInSchema = Yup.object().shape({
	username: Yup.string().required(),
	password: Yup.string()
		.min(6, "Password Must be at least 6 characters")
		.required(),
});

const SignIn = () => {
	const { isLoading, signIn, error } = useContext(AuthContext);
	const form = [
		{
			id: 1,
			type: "username",
			value: "Username or Email",
			name: "username",
		},
		{ id: 4, type: "password", value: "Password", name: "password" },
	];

	return (
		<>
			<h1>Login</h1>
			<Formik
				initialValues={{ username: "", password: "" }}
				onSubmit={(values, actions) => {
					signIn(values);
					actions.resetForm();
				}}
				validationSchema={SignInSchema}
			>
				<Form className={styles.formik}>
					<ErrorMessage
						name="username"
						render={(msg) => (
							<div className={styles.schema}>{error.message}</div>
						)}
					/>
					{form.map((data) => (
						<div className={styles.field} key={data.id}>
							<label>{data.value}: </label>
							<Field
								label={data.value}
								type={data.type}
								name={data.value}
								id={data.id}
								placeholder={data.value}
							/>
						</div>
					))}
					<Button type="submit" color="blue">
						{!isLoading ? "Sign In" : <Loader />}
					</Button>
					<Button color="blue">
						<Link to="/register">Dont have an account?</Link>
					</Button>
				</Form>
			</Formik>
		</>
	);
};

export default SignIn;
