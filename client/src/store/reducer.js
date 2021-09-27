import { FETCH_POKEMONS } from "./actionType";

const initialState = {
  pokemons: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return state;
  }
}
