import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Loader } from "semantic-ui-react";
import * as Yup from "yup";

import { AuthContext } from "../../utils/context/auth/authState";

import styles from "../../stylesheets/pages.module.scss";

const registerSchema = Yup.object().shape({
	username: Yup.string().required(),
	password: Yup.string()
		.min(6, "Password Must be at least 6 characters")
		.required(),
});

export default function Register() {
	const { isLoading, register } = useContext(AuthContext);
	const form = [
		{ id: 1, type: "username", value: "Username", name: "username" },
		{ id: 2, type: "email", value: "Email", name: "email" },
		{ id: 3, type: "text", value: "Phone Number" },
		{ id: 4, type: "password", value: "Password", name: "password" },
		{ id: 5, type: "password", value: "Confirm Password" },
	];
	return (
		<div>
			<h1>Register</h1>
			<Formik
				initialValues={{
					username: "",
					email: "",
					phoneNumber: "",
					password: "",
					ConfirmPassword: "",
				}}
				onSubmit={(values, actions) => {
					register(values);
					actions.resetForm();
				}}
				// validationSchema={registerSchema}
			>
				<Form className={styles.formik}>
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
							<ErrorMessage name={data.id} />
						</div>
					))}
					<Button type="submit" color="blue">
						{!isLoading ? "Register" : <Loader />}
					</Button>

					<Button color="blue">
						<Link to="/login"> Already have an account? </Link>
					</Button>
				</Form>
			</Formik>
		</div>
	);
}
