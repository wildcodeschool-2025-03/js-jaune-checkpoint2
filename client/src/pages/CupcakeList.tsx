import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

// Types (idem)
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

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  const [accessoriesList, setAccessoriesList] = useState<AccessoryArray>([]);
  const [selectedAccessoryId, setSelectedAccessoryId] = useState("");

  // Fetch cupcakes depuis l'API au chargement du composant
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        console.info("Cupcakes récupérés:", data);
        setCupcakes(data);
      })
      .catch((error) => console.error("Erreur fetch cupcakes:", error));
  }, []);

  // Fetch accessoires depuis l'API au chargement
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => {
        console.info("Accessoires récupérés:", data);
        setAccessoriesList(data);
      })
      .catch((error) => console.error("Erreur fetch accessoires:", error));
  }, []);

  // Filtrer les cupcakes selon l’accessoire sélectionné
  const filteredCupcakes =
    selectedAccessoryId === ""
      ? cupcakes
      : cupcakes.filter(
          (cupcake) => cupcake.accessory_id === selectedAccessoryId,
        );

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
            {accessoriesList.map((accessory) => (
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
