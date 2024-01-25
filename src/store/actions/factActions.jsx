import axios from "axios"
import { FactsActionType } from "../reducers/factReducer";
import { resetIsFavoritedActionCreator } from "./favoritesActions";

export const changeFactActionCreator = (fact) => ({
  type: FactsActionType.setFact,
  payload: fact,
});

export const fetchFact = () => (dispatch, getState) => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        dispatch(changeFactActionCreator(res.data.fact));   
        dispatch(resetIsFavoritedActionCreator());
})
      .catch((err) => console.warn(err));
}