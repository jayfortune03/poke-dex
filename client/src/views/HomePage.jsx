import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";

import { fetchPokemons } from "../store/action";

export default function HomePage() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  console.log(pokemons, `INI POKEMONS`);

  return (
    <div className="mx-24 my-24 gap-16 grid grid-cols-4">
      {pokemons?.results?.map((el) => {
        return <Card />;
      })}
    </div>
  );
}
