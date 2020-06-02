export const loadState = (state) => {
	try {
		const serializedState = localStorage.getItem(state);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (e) {
		return undefined;
	}
};
export const saveState = (stateName, stateDetail) => {
	try {
		const serializedState = JSON.stringify(stateDetail);
		localStorage.setItem(stateName, serializedState);
	} catch (e) {
		console.log(`error occurs while saving state: ${e}`);
	}
};
export const removeState = () => {
	try {
		localStorage.clear();
	} catch (e) {
		console.log(`error occurs while clearing state: ${e}`);
	}
};
