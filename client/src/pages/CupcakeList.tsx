import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

// Types
type CupcakeType = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

type CupcakeArray = CupcakeType[];

type Accessory = {
  id: string;
  name: string;
};

type AccessoryArray = Accessory[];

// Sample data (à remplacer par fetch plus tard)
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

function CupcakeList() {
  const [cupcakes] = useState<CupcakeArray>(sampleCupcakes);
  const [accessoriesList, setAccessoriesList] = useState<AccessoryArray>([]);
  const [selectedAccessoryId, setSelectedAccessoryId] = useState("");

  useEffect(() => {
    // Récupérer les accessoires uniques à partir des cupcakes
    const uniqueAccessories: Accessory[] = [];

    for (const cupcake of sampleCupcakes) {
      const alreadyExists = uniqueAccessories.find(
        (acc) => acc.id === cupcake.accessory_id,
      );
      if (!alreadyExists) {
        uniqueAccessories.push({
          id: cupcake.accessory_id,
          name: cupcake.accessory,
        });
      }
    }

    setAccessoriesList(uniqueAccessories);
  }, []);

  // Filtrer les cupcakes selon l’accessoire sélectionné
  const filteredCupcakes =
    selectedAccessoryId === ""
      ? cupcakes
      : cupcakes.filter(
          (cupcake) => cupcake.accessory_id === selectedAccessoryId,
        );

  // Gestion du changement dans le select
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedAccessoryId(e.target.value);
  }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessoryId}
            onChange={handleSelectChange}
          >
            <option value="">---</option>
            {accessoriesList.map((accessory: Accessory) => (
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
      </ul>
    </>
  );
}

export default CupcakeList;
