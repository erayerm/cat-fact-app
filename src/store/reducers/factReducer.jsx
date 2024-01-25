export const FactsActionType = {
  setFact: "SET_FACT",
};

const initialState = {
  fact: "Loading..."
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FactsActionType.setFact:
        return{
            fact: action.payload
        }
    default:
      return state;
  }
};

export default reducer;
