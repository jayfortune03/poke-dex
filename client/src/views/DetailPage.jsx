import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Label from "@material-tailwind/react/Label";

import AboutPokemon from "../components/AboutPokemon";
import StatsPokemon from "../components/StatsPokemon";
import MovesPokemon from "../components/MovesPokemon";
import EvolutionPokemon from "../components/EvolutionPokemon";
import Loading from "../components/Loading";

export default function DetailPage() {
  const { id } = useParams();

  const [color, setColor] = useState("");
  const [species, setSpecies] = useState("");
  const [evolutionUrl, setEvolutionUrl] = useState("");

  const [pokemon, setPokemon] = useState({});

  const [showAbout, setShowAbout] = useState(true);
  const [showMoves, setShowMoves] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showEvolution, setShowEvolution] = useState(false);

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

      //   console.log(pokemonData, `INI DI SPECIES`);
      setEvolutionUrl(pokemonData?.evolution_chain?.url);
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

  async function seeAbout() {
    try {
      setShowStats(false);
      setShowAbout(true);
      setShowMoves(false);
      setShowEvolution(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function seeMoves() {
    try {
      setShowStats(false);
      setShowAbout(false);
      setShowMoves(true);
      setShowEvolution(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function seeEvolution() {
    try {
      setShowStats(false);
      setShowAbout(false);
      setShowMoves(false);
      setShowEvolution(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function seeStats() {
    try {
      setShowAbout(false);
      setShowStats(true);
      setShowMoves(false);
      setShowEvolution(false);
    } catch (err) {
      console.log(err);
    }
  }

  if (Object.keys(pokemon).length === 0) {
    return <Loading widthLoad={600} heightLoad={600} />;
  }

  return (
    <div
      className={`border-2 rounded-2xl sm:mx-4 sm:my-4 lg:mx-12 lg:my-12 ${
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
              key={el.type.name}
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
      <div className="rounded-t-2xl flex mt-8 pt-10 border-2 bg-white justify-evenly items-center">
        <button onClick={() => seeAbout()} className="btn btn-link text-black">
          About
        </button>
        <button onClick={() => seeStats()} className="btn btn-link text-black">
          Stats
        </button>
        <button
          onClick={() => seeEvolution()}
          className="btn btn-link text-black"
        >
          Evolution
        </button>
        <button onClick={() => seeMoves()} className="btn btn-link text-black">
          Moves
        </button>
      </div>
      <div className="bg-white">
        {showAbout ? <AboutPokemon data={pokemon} /> : null}
        {showStats ? <StatsPokemon data={pokemon?.stats} /> : null}
        {showEvolution ? (
          <EvolutionPokemon url={evolutionUrl} currentName={pokemon?.name} />
        ) : null}
        {showMoves ? <MovesPokemon id={pokemon?.id} /> : null}
      </div>
    </div>
  );
}
