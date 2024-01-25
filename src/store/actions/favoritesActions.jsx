import { FavoritesActionType } from "../reducers/favoritesReducer";

export const addToFavoritesActionCreator = (text) => ({
  type: FavoritesActionType.addToFavorites,
  payload: text,
});

export const removeFromFavoritesActionCreator = (text) => ({
  type: FavoritesActionType.removeFromFavorites,
  payload: text,
});

export const resetIsFavoritedActionCreator = (bool) => ({
  type: FavoritesActionType.resetIsFavorite,
  payload: bool
});

// export const isItAlreadyInFavoritesActionCreator = () => ({
//     type: FavoritesActionType
// })
