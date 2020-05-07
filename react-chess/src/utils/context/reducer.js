import { IS_LOADING, START_GAME_SUCCESS, START_GAME_ERROR } from "./types";
// updates the state
const setIsLoading = (state, action) => {
	return {
		...state,
		is_loading: action.payload,
	};
};

const startGame = (state, action) => {
	return {
		...state,
		is_loading: false,
		chess: action.payload,
	};
};
const startGameError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};

// cases
export const reducer = (state, action) => {
	switch (action.type) {
		case IS_LOADING:
			return setIsLoading(state, action);
		case START_GAME_SUCCESS:
			return startGame(state, action);
		case START_GAME_ERROR:
			return startGameError(state, action);
		default:
			return state;
	}
};
