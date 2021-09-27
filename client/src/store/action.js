import { FETCH_POKEMONS } from "./actionType";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export function setPokemons(action, payload) {
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

      console.log(response.status, `INI STATUS`);
      console.log(data, `INI POKEMON`);
      dispatch(setPokemons(data));
    } catch (err) {
      console.log(err);
    }
  };
}
