import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
type AccessoryArray = { id: number; name: string; slug: string }[];

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

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  const [change, setChange] = useState("");

  // Récupération de l'API des Cupakes

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        setCupcakes(data);
        console.info(data);
      });
  }, []);

  // Récupération de l'API des accessoires

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data as AccessoryArray);
        console.info(data);
      });
  }, []);

  // Fonction de filtre des cupcakes

  const filterCupcake = cupcakes.filter(
    (cupcakeFilter) => change === "" || cupcakeFilter.accessory_id === change,
  );

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          <select
            id="cupcake-select"
            value={change}
            onChange={(event) => setChange(event.target.value)}
          >
            <option value="">---</option>
            {/* .MAP pour afficher le tableau des accessoires en balise option */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* .MAP pour afficher le tableau des cupcakes en balise li après filtrage */}
        {filterCupcake.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
