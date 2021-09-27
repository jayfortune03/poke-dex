import { FETCH_POKEMONS, FETCH_POKEMON } from "./actionType";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export function setPokemons(payload) {
  return {
    type: FETCH_POKEMONS,
    payload: payload,
  };
}

export function setPokemon(payload) {
  return {
    type: FETCH_POKEMON,
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

export function fetchPokemon(id) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${baseUrl}/${id}`);
      const data = await response.json();

      console.log(data);

      dispatch(setPokemon(data));
    } catch (err) {
      console.log(err);
    }
  };
}
