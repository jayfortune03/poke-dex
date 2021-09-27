import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Label from "@material-tailwind/react/Label";

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
    <div className={`hero min-h-screen`}>
      <div
        className={`border-2 ${
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
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={pokemon?.sprites?.other["official-artwork"].front_default}
            className="shadow-2xl rounded-2xl bg-green-100"
            alt="pokemon"
          />
          <div>
            <h1 className="mb-5 text-5xl text-transform: capitalize font-bold">
              {pokemon?.name}
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
