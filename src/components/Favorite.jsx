import React from "react";
import { useDispatch } from "react-redux";
import { removeFromFavoritesActionCreator } from "../store/actions/favoritesActions";

export default function Favorite({key, item}){
    const dispatch = useDispatch();
    const favoriteHandle = () => {
        dispatch(removeFromFavoritesActionCreator(item));
    }
    return (
      <div
        key={key}
        className="w-full bg-white flex items-center justify-between px-8 py-2 mt-2 gap-[10px]"
      >
        <p className="max-w-[90%]">{item}</p>
        <button
          className="rounded-full bg-custom-blue text-white max-w-[10%] w-[30px] h-[30px]"
          onClick={favoriteHandle}
        >
          -
        </button>
      </div>
    );
}