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

  return (
    <div className="mx-12 my-12 h-auto w-auto gap-16 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
      {pokemons?.results?.map((el) => {
        return <Card key={el.name} data={el} />;
      })}
    </div>
  );
}
