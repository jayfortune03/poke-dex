import { FETCH_POKEMONS } from "./actionType";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export function setPokemons(payload) {
  return {
    type: FETCH_POKEMONS,
    payload: payload,
  };
}

export function fetchPokemons() {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();

      dispatch(setPokemons(data));
    } catch (err) {
      console.log(err);
    }
  };
}
