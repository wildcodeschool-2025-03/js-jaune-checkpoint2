import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

const sampleCupcakes: CupcakeArray = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

type AccessoryArray = { id: number; name: string }[];

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>(sampleCupcakes);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_CUPCAKES)
      .then((response) => response.json())
      .then((data) => {
        setCupcakes(data);
        console.info("Cupcakes récupérés:", data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des cupcakes :", error);
      });
  }, []);

  console.log("Cupcakes:", cupcakes);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_ACCESSORIES)
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data);
        console.info("Accessoires récupérés:", data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des accessoires :",
          error,
        );
      });
  }, []);
  console.log("Accessoires:", accessories);
  const sampleAccessories = sampleCupcakes.map((cupcake) => ({
    id: cupcake.accessory_id,
    name: cupcake.accessory,
  }));
  const uniqueAccessories = sampleAccessories.filter(
    (accessory, index, self) =>
      index === self.findIndex((a) => a.id === accessory.id),
  );

  // Step 5: create filter state
  const [filter, setFilter] = useState("");
  const filteredCupcakes = filter
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === filter)
    : cupcakes;
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleFilterChange}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {uniqueAccessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
