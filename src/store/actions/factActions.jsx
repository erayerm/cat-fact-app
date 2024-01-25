import axios from "axios"
import { FactsActionType } from "../reducers/factReducer";
import { resetIsFavoritedActionCreator } from "./favoritesActions";
import { useSelector } from "react-redux";


export const changeFactActionCreator = (fact) => ({
  type: FactsActionType.setFact,
  payload: fact,
});

export const fetchFact = (favorites) => (dispatch, getState) => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        dispatch(changeFactActionCreator(res.data.fact));   
        if(favorites.find((item)=>item===res.data.fact)){
            console.warn("bir");
            dispatch(resetIsFavoritedActionCreator(true));
        }else{
            console.warn("iki");
            dispatch(resetIsFavoritedActionCreator(false));
        }
    })
      .catch((err) => console.warn(err));
}