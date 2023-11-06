import { RootState } from "../interfaces/rootState";

const defaultState = {
	word: "",
}

const ADD_FILTER = "ADD_FILTER"

export const filterReducer = (state = defaultState, action: { type: string; payload: string }) => {
	switch(action.type) {
		case ADD_FILTER:
			return{...state, word: action.payload}
		default:
			return state
	}
}