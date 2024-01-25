const lsKey = "favorites";
const setToLocalStorage = (key = lsKey, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const readFromLocalStorage = (key = lsKey) => {
  return JSON.parse(localStorage.getItem(key));
};

export const FavoritesActionType = {
  addToFavorites: "ADD_FAVORITES",
  removeFromFavorites: "REMOVE_FAVORITES",
  resetIsFavorite: "RESET_IS_FAVORITE",
};

const initialState = {
  favorites: readFromLocalStorage() || [],
  isFavorite: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FavoritesActionType.addToFavorites:
      setToLocalStorage("favorites", [...state.favorites, action.payload]);
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        isFavorite: true,
      };
    case FavoritesActionType.resetIsFavorite:
      console.warn(typeof action.payload);
      console.warn("hey");
      return {
        ...state,
        isFavorite: Boolean(action.payload),
      };
    case FavoritesActionType.removeFromFavorites:
            setToLocalStorage(
              "favorites",
              state.favorites.filter((item) => item !== action.payload)
            );

      return {
        ...state,
        isFavorite: false,
        favorites: state.favorites.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
