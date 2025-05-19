import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
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
  const [allCupcakes, setAllCupcakes] = useState<CupcakeArray>([]);
  const [filteredCupcakes, setFilteredCupcakes] = useState<CupcakeArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        setAllCupcakes(data);
        setFilteredCupcakes(data); // copie initiale pour affichage
      });
  }, []);

  // Step 3: get all accessories
  type AccessoryArray = { id: number; name: string; slug: string }[];
  const [allAccessories, setAllAccessories] = useState<AccessoryArray>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => {
        setAllAccessories(data);
        console.info(data);
      });
  }, []);

  // Step 5: create filter state
  function handleChange(accessory: string) {
    if (accessory === "") {
      setFilteredCupcakes(allCupcakes); // reset du filtre
    } else {
      const filtered = allCupcakes.filter(
        (cupcake) => cupcake.accessory === accessory,
      );
      setFilteredCupcakes(filtered);
    }
  }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {allAccessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {filteredCupcakes.map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
        ))}
        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
