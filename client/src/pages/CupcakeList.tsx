import { useCallback, useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
interface CupcakeType {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}
type CupcakeArray = CupcakeType[];

interface AccessoryType {
  id: string;
  name: string;
}
type AccessoryArray = AccessoryType[];

// const sampleCupcakes: CupcakeArray = [
//   {
//     id: 10,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "blue",
//     color2: "white",
//     color3: "red",
//     name: "France",
//   },
//   {
//     id: 11,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "yellow",
//     color2: "red",
//     color3: "black",
//     name: "Germany",
//   },
//   {
//     id: 27,
//     accessory_id: "5",
//     accessory: "christmas-candy",
//     color1: "yellow",
//     color2: "blue",
//     color3: "blue",
//     name: "Sweden",
//   },
// ];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  const fetchCupcakes = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3310/api/cupcakes");
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status} `);
      }
      const data = await response.json();
      setCupcakes(data);
    } catch (error) {
      console.error("Cupcakes error:", error);
    }
  }, []);

  // Step 3: get all accessories

  const fetchAccessories = useCallback(async () => {
    try {
      const resp = await fetch("http://localhost:3310/api/accessories");
      if (!resp.ok) throw new Error(`Erreur HTTP : ${resp.status}`);
      const data: AccessoryArray = await resp.json();
      setAccessories(data);
    } catch (err) {
      console.error("Fetch accessories error:", err);
    }
  }, []);

  useEffect(() => {
    fetchCupcakes();
    fetchAccessories();
  }, [fetchCupcakes, fetchAccessories]);
  // Step 5: create filter state
  const displayed = selectedAccessory
    ? cupcakes.filter((c) => c.accessory_id === selectedAccessory)
    : cupcakes;

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
            {accessories.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {displayed.map((c) => (
          <li key={c.id} className="cupcake-item">
            <Cupcake data={c} />
            {/* <Link to ={`/cupcakes/${c.id}`}>
            <Cupcake data={c} />
            </Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
