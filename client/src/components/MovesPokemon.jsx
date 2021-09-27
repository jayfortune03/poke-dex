import { useEffect, useState } from "react";

export default function MovesPokemon({ id }) {
  const [moves, setMoves] = useState([]);
  useEffect(() => {
    fetchMoves(id);
  }, [id]);

  async function fetchMoves(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/move/${id}/`);
      const data = await response.json();
      setMoves(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="overflow-x-auto pt-12 flex ">
      <table className="table w-full text-center">
        <tr>
          <td className="opacity-70 font-bold">Name</td>
          <td className="font-light text-transform: capitalize">
            {moves?.name}
          </td>
        </tr>
        <tr>
          <td className="opacity-70 font-bold">Power</td>
          <td className="font-light text-transform: capitalize">
            {moves?.power}
          </td>
        </tr>
        <tr>
          <td className="opacity-70 font-bold">Damage Class</td>
          <td className="font-light text-transform: capitalize">
            {moves?.damage_class?.name}
          </td>
        </tr>
        <tr>
          <td className="opacity-70 font-bold">Type</td>
          <td className="font-light text-transform: capitalize">
            {moves?.type?.name}
          </td>
        </tr>
        <tr>
          <td className="opacity-70 font-bold">Accuracy</td>
          <td className="font-light text-transform: capitalize">
            {moves?.accuracy}
          </td>
        </tr>
      </table>
    </div>
  );
}
