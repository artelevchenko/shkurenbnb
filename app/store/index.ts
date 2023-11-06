import { combineReducers, legacy_createStore as createStore } from "redux";
import {filterReducer} from "./filterReducer";

const rootReducer = combineReducers({
	filterWord: filterReducer
})

export const store = createStore(rootReducer)