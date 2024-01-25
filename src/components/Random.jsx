import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFact } from "../store/actions/factActions";
import {
  addToFavoritesActionCreator,
  removeFromFavoritesActionCreator,
  resetIsFavoritedActionCreator,
} from "../store/actions/favoritesActions";

export default function Random() {
  const catFactText = useSelector((store) => store.fact.fact);
  const isFavorite = useSelector((store) => store.favorites.isFavorite);
  const favorites = useSelector((store) => store.favorites.favorites);

  const dispatch = useDispatch();

  const factHandle = () => {
    dispatch(fetchFact(favorites));
    //dispatch(resetIsFavoritedActionCreator());
  };
  const favoritesHandle = () => {
    if (!isFavorite) {
      dispatch(addToFavoritesActionCreator(catFactText));
    } else {
      dispatch(removeFromFavoritesActionCreator(catFactText));
    }
  };
  return (
    <>
      <div className="w-full bg-white text-center p-5 text-xl mt-10">
        {catFactText}
      </div>
      <div className="flex gap-10 text-custom-blue self-end">
        <button
          className="border-solid border border-custom-blue px-5 py-2"
          onClick={factHandle}
        >
          Another One
        </button>
        <button
          className="bg-custom-blue text-white px-5 py-2"
          onClick={favoritesHandle}
        >
          {isFavorite ? "Remove from" : "Add to"} Favorites
        </button>
      </div>
    </>
  );
}
