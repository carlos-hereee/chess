import React, { createContext, useReducer, useEffect } from "react";

import { reducer } from "./reducer";
import { IS_LOADING } from "./types";
import { axiosWithAuth, client } from "../axiosWithAuth";

import { loadState, saveState } from "../localStorage";

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
	const localState = loadState("chess");

	// use reducer on local state or start fresh with initial state
	const [state, dispatch] = useReducer(reducer, localState || initialState);

	useEffect(() => {
		saveState("chess", state);
	}, [state]);

	return (
		<ChessContext.Provider
			value={{ chess: state.chess, isLoading: state.isLoading }}
		>
			{props.children}
		</ChessContext.Provider>
	);
};
