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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
            ? "bg-gray-400"
            : color.name === "yellow"
            ? "bg-yellow-300"
            : ""
        } text-accent-content`}
      >
        <div className="flex ml-4 mt-8">
          <h2 className="card-title xl:text-2xl md:text:3-xl">
            {capitalizeFirstLetter(data.name)}
          </h2>
        </div>
        <div className="flex xl:mt-2 xl:my:2 lg:mt-6 lg:ml-6">
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
          <img
            className="lg:ml-35 xl:ml-12 md:ml-20 sm:ml-40"
            src={pokemon?.sprites?.front_default}
            alt="pokemon"
          />
        </div>
      </div>
    </Link>
  );
}

// Normal, Fire, Water, Grass, Flying, Fighting, Poison, Electric, Ground, Rock, Psychic, Ice, Bug, Ghost, Steel, Dragon, Dark and Fairy
