import React, { createContext, useReducer, useEffect } from "react";

import { reducer } from "./reducer";
import { IS_LOADING, START_GAME_SUCCESS, START_GAME_ERROR } from "../types";
import { axiosWithAuth, client } from "../../axiosWithAuth";

// import { loadState, saveState } from "./localStorage";

export const ChessContext = createContext();

/* 
GOAL:
    Create Global state with React Context
    Create communication with backend server with CRUD operations
USAGE:
    Wrap ContextState in app to initialize global state
    import useContext in component wherever neede
    import {DatatContext} from './path to State'
    create variable 
        const {state, or method-function, or both} = useContext({DataContext})
RETURNS:
    Updated state
*/
export const ChessState = (props) => {
	// create and initial state
	const initialState = { isLoading: false, chess: [] };

	// get updated state from localStorage
	// const localState = loadState("chess");

	// use reducer on local state or start fresh with initial state
	const [state, dispatch] = useReducer(reducer, initialState);

	// useEffect(() => {
	// 	saveState("chess", state);
	// }, [state]);
	const newGame = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await client().get(`/chess/`);
			dispatch({ type: START_GAME_SUCCESS, payload: res.data.newGame });
		} catch (e) {
			dispatch({ type: START_GAME_ERROR, payload: e.response });
		}
	};

	return (
		<ChessContext.Provider
			value={{ chess: state.chess, isLoading: state.isLoading, newGame }}
		>
			{props.children}
		</ChessContext.Provider>
	);
};
