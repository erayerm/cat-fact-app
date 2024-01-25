import { combineReducers } from "redux";
import factReducer from "./factReducer";
import favoritesReducer from "./favoritesReducer"

const reducers = combineReducers({
    fact: factReducer,
    favorites: favoritesReducer
})

export default reducers;