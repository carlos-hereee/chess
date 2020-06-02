import React, { createContext, useReducer, useEffect } from "react";

import {
	IS_LOADING,
	SIGNIN_SUCCESS,
	SIGNIN_FAILURE,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	SIGNOUT_SUCCESS,
	SIGNOUT_FAILURE,
} from "../types";

import authReducer from "./reducer";

import { client } from "../../axiosWithAuth";

import { loadState, saveState, removeState } from "../../localStorage";

export const AuthContext = createContext();

export const AuthState = (props) => {
	const initialState = {
		error: "",
		isLoading: false,
		accessToken: null,
		userProfile: null,
	};

	const localState = loadState("auth");

	const [state, dispatch] = useReducer(
		authReducer,
		localState || initialState
	);

	useEffect(() => {
		saveState("auth", state);
	}, [state]);

	const signUpUser = async (values) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const response = await client.post("/auth/register", values);

			dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
		} catch (error) {
			console.log(error);
			dispatch({ type: SIGNUP_FAILURE, payload: error });
		}
	};
	const signIn = async (credential) => {
		console.log("credential", credential);
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const response = await client.post("/auth/login", credential);
			dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
		} catch (error) {
			dispatch({ type: SIGNIN_FAILURE, payload: error });
		}
	};
	const signOut = () => {
		try {
			dispatch({ type: SIGNOUT_SUCCESS });
			removeState();
		} catch (error) {
			dispatch({ type: SIGNOUT_FAILURE, payload: error.message });
		}
	};

	return (
		<AuthContext.Provider
			value={{
				error: state.error,
				accessToken: state.accessToken,
				isLoading: state.isLoading,
				userProfile: state.userProfile,
				signIn,
				signUpUser,
				signOut,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
