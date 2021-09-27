export default function StatsPokemon({ data }) {
  return (
    <div class="overflow-x-auto pt-12 flex ">
      <table class="table w-full text-center">
        {data?.map((el) => {
          return (
            <tr>
              <td className="opacity-70 text-transform: capitalize font-bold">
                {el.stat.name}
              </td>
              <td className="font-light text-lg">
                {el.base_stat}

                <div className="h-2 mb-4 w-full mr-36 text-xs flex rounded bg-gray-300">
                  <div
                    style={{ width: `${el.base_stat}%` }}
                    className={`shadow-none text-center whitespace-nowrap text-white justify-center ${
                      el.base_stat > 60
                        ? "bg-green-500"
                        : el.base_stat < 60
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    } `}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
