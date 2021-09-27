import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Label from "@material-tailwind/react/Label";

export default function Card({ data }) {
  const [pokemon, setPokemon] = useState({});
  const [species, setSpecies] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    fetchPokemon(data.url);
  }, [data.url]);

  useEffect(() => {
    fetchSpeciesPokemon(pokemon?.species?.url);
  }, [pokemon?.species?.url]);

  useEffect(() => {
    fetchColorPokemon(species?.color?.url);
  }, [species?.color?.url]);

  async function fetchColorPokemon(url) {
    try {
      const response = await fetch(url);
      const pokemonData = await response.json();

      setColor(pokemonData);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchSpeciesPokemon(url) {
    try {
      const response = await fetch(url);
      const pokemonData = await response.json();

      setSpecies(pokemonData);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchPokemon(url) {
    try {
      const response = await fetch(url);
      const pokemonData = await response.json();

      setPokemon(pokemonData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div
        className={`card shadow-lg hover:grow hover:shadow-lg ${
          color.name === "green"
            ? "bg-green-300"
            : color.name === "red"
            ? "bg-red-300"
            : color.name === "blue"
            ? "bg-blue-300"
            : color.name === "brown"
            ? "bg-yellow-700"
            : color.name === "purple"
            ? "bg-purple-300"
            : color.name === "white"
            ? "bg-gray-300"
            : color.name === "yellow"
            ? "bg-yellow-300"
            : ""
        } text-accent-content`}
      >
        {pokemon?.id > 9 ? (
          <div className="flex ml-6 mt-8 opacity-80 text-3xl">
            #0{pokemon?.id}
          </div>
        ) : (
          <div className="flex ml-6 mt-8 opacity-80 text-3xl">
            #00{pokemon?.id}
          </div>
        )}

        <div className="flex ml-6 mt-8 text-transform: capitalize">
          <h2 className="card-title lg:text-4xl">{data.name}</h2>
        </div>
        <div className="flex mt-4 ml-6">
          {pokemon?.types?.map((el) => {
            return (
              <Label
                color={
                  el.type.name === "water"
                    ? "blue"
                    : el.type.name === "fire"
                    ? "red"
                    : el.type.name === "grass"
                    ? "green"
                    : el.type.name === "ice"
                    ? "lightBlue"
                    : el.type.name === "poison"
                    ? "purple"
                    : el.type.name === "flying"
                    ? "indigo"
                    : el.type.name === "normal"
                    ? "gray"
                    : el.type.name === "bug"
                    ? "yellow"
                    : ""
                }
              >
                {el.type.name}
              </Label>
            );
          })}
        </div>
        <div className="card-body flex">
          <img src={pokemon?.sprites?.front_default} alt="pokemon" />
        </div>
      </div>
    </Link>
  );
}
