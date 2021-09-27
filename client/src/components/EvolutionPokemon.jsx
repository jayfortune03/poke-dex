import { useEffect, useState } from "react";

export default function EvolutionPokemon({ url: evolutionUrl, currentName }) {
  const [evolution, setEvolution] = useState({});

  useEffect(() => {
    fetchEvolution(evolutionUrl);
  }, []);

  async function fetchEvolution(url) {
    try {
      const response = await fetch(url);

      const data = await response.json();

      setEvolution(data.chain);
    } catch (err) {
      console.log(err);
    }
  }

  //   console.log(evolution?.species?.name, currentName, `NIH BANDING`);

  console.log(evolution);

  return (
    <div class="overflow-x-auto pt-12 flex ">
      <table class="table w-full text-center">
        <tr>
          <td className="opacity-70 font-bold">Name : </td>
          <td className="font-light text-transform: capitalize">
            {currentName}
          </td>
        </tr>
        {evolution?.evolves_to?.map((el) => {
          console.log(el, `INI LOOPING`);
          // console.log(el.species.name, currentName, `INI BANDINGAN`);
          return (
            <>
              <tr key={el.species.name}>
                <td className="opacity-70 font-bold">Evolution 1 : </td>
                <td className="font-light text-transform: capitalize">
                  {el.species.name}
                </td>
              </tr>
              {el.evolves_to.map((evo) => {
                return (
                  <tr key={evo.species.name}>
                    <td className="opacity-70 font-bold">Evolution 2 : </td>
                    <td className="font-light text-transform: capitalize">
                      {evo.species.name}
                    </td>
                  </tr>
                );
              })}
            </>
          );
        })}
      </table>
    </div>
  );
}
