import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

interface flagCupcake {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

interface Accessory {
  id: number;
  name: string;
  slug: string;
}

/* ************************************************************************* */
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

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */
function CupcakeList() {
  // Step 1: get all cupcakes
  const [cupcakes, setCupcakes] = useState<flagCupcake[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  useEffect(() => {
    const fetchCupcakes = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/cupcakes");
        const data = await response.json();
        setCupcakes(data);
        console.info("Cupcakes récupérés :", data);
      } catch (error) {
        console.error("Erreur lors de la récupération des cupcakes :", error);
        setCupcakes(sampleCupcakes);
      }
    };

    fetchCupcakes();
  }, []);

  // Step 3: get all accessories

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/accessories");
        const data = await response.json();
        setAccessories(data);
        console.info("Accessoires récupérés :", data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des accessoires :",
          error,
        );
      }
    };

    fetchAccessories();
  }, []);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {cupcakes
          .filter((cupcake) =>
            selectedAccessory === ""
              ? true
              : cupcake.accessory.toLowerCase().trim() ===
                selectedAccessory.toLowerCase().trim(),
          )
          .map((cupcake) => (
            <li className="cupcake-item" key={cupcake.id}>
              <Link to={`/cupcakes/${cupcake.id}`}>
                <Cupcake data={cupcake} />
              </Link>
            </li>
          ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
