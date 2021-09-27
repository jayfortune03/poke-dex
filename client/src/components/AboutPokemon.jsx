import useConvertHeight from "../hooks/useConvertHeight";
import useConvertWeight from "../hooks/useConvertWeight";
import useConvertAbilities from "../hooks/useConvertAbilities";

export default function AboutPokemon({ data }) {
  console.log(data, `INI DATA`);
  return (
    <div className="overflow-x-auto pt-12 flex ">
      <table className="table w-full text-center">
        <tr>
          <td className="opacity-70 font-bold">Species</td>
          <td className="font-light text-transform: capitalize">
            {data?.species?.name}
          </td>
        </tr>
        <tr>
          <td className="opacity-70 font-bold">Weight</td>
          <td className="font-light">{useConvertWeight(data.weight)}</td>
        </tr>
        <tr>
          <td className="opacity-70 font-bold">Height</td>
          <td className="font-light">{useConvertHeight(data.height)}</td>
        </tr>
        <tr>
          <td className="opacity-70 font-bold">Abilities</td>
          <td className="font-light text-transform: capitalize">
            {useConvertAbilities(data.abilities)}
          </td>
          ;
        </tr>
      </table>
    </div>
  );
}
