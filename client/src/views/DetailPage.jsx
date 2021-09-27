import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Label from "@material-tailwind/react/Label";

import AboutPokemon from "../components/AboutPokemon";

export default function DetailPage() {
  const { id } = useParams();

  const [color, setColor] = useState("");
  const [species, setSpecies] = useState("");
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

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

  async function fetchPokemon(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemonData = await response.json();

      setPokemon(pokemonData);
    } catch (err) {
      console.log(err);
    }
  }

  //   console.log(pokemon?.sprites?.other["official-artwork"].front_default);

  return (
    <>
      <div
        className={`border-2 rounded-2xl mx-12 my-12 ${
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
        }`}
      >
        {pokemon?.id > 9 ? (
          <div className="flex ml-6 mt-8 opacity-50 text-3xl">
            #0{pokemon?.id}
          </div>
        ) : (
          <div className="flex ml-6 mt-8 opacity-50 text-3xl">
            #00{pokemon?.id}
          </div>
        )}

        <h1 className="mb-5 text-5xl ml-6 mt-4 text-transform: capitalize font-bold">
          {pokemon?.name}
        </h1>

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
        <div className="flex w-full mt-24 mb-10 justify-center items-center">
          <img
            src={pokemon?.sprites?.other["official-artwork"].front_default}
            className="absolute object-cover hover:grow transition-all transform duration-500 mx-auto rounded-2xl"
            width="200"
            height="200"
            alt="pokemon"
          />
        </div>
        <div className="w-full h-1/2 rounded-t-2xl flex mt-8 pt-10 flex-row border-2 bg-white justify-evenly items-center z-50">
          <button className="btn btn-link text-black">About</button>
          <button className="btn btn-link text-black">link</button>
          <button className="btn btn-link text-black">link</button>
          <button className="btn btn-link text-black">link</button>
        </div>
        <div className="bg-white">
          <AboutPokemon data={pokemon} />
        </div>
      </div>
    </>
  );
}
