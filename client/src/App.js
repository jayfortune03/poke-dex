import "./App.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./components/Card";

import { fetchPokemons } from "./store/action";

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  console.log(pokemons);

  return (
    <div className="mx-96 my-96">
      <Card />
    </div>
  );
}

export default App;
