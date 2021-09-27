export default function AboutPokemon({ data }) {
  return (
    <div class="overflow-x-auto pt-12 flex ">
      <table class="table w-full text-center">
        <tr>
          <td className="opacity-70 font-bold">Species : </td>
          <td className="font-light">Quality Control Specialist</td>
        </tr>
        <tr>
          <td className="opacity-70 font-bold">Weight : </td>
          <td className="font-light">Purple</td>
        </tr>
        <tr>
          <td className="opacity-70 font-bold">Height : </td>
          <td className="font-light">Red</td>
        </tr>
      </table>
    </div>
  );
}
