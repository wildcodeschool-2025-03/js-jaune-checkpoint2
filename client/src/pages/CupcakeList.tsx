import Cupcake from "../components/Cupcake";
import { useState } from "react";
import type { AccessoryArray, CupcakeArray } from "../types";
import { Link } from "react-router-dom";
//import {db} from "../../../server/src/db.json"

/* ************************************************************************* */
const sampleCupcakes: CupcakeArray = [
  {
      "id": 1,
      "accessory_id": "3",
      "accessory": "chocolate",
      "color1": "red",
      "color2": "white",
      "color3": "red",
      "name": "Austria"
    },
    {
      "id": 2,
      "accessory_id": "3",
      "accessory": "chocolate",
      "color1": "black",
      "color2": "yellow",
      "color3": "red",
      "name": "Belgium"
    },
    {
      "id": 3,
      "accessory_id": "1",
      "accessory": "cherry",
      "color1": "red",
      "color2": "green",
      "color3": "white",
      "name": "Bulgaria"
    },
    {
      "id": 4,
      "accessory_id": "1",
      "accessory": "cherry",
      "color1": "red",
      "color2": "white",
      "color3": "blue",
      "name": "Croatia"
    },
    {
      "id": 5,
      "accessory_id": "3",
      "accessory": "chocolate",
      "color1": "white",
      "color2": "white",
      "color3": "white",
      "name": "Cyprus"
    },
    {
      "id": 6,
      "accessory_id": "1",
      "accessory": "cherry",
      "color1": "red",
      "color2": "blue",
      "color3": "white",
      "name": "Czechia"
    },
    {
      "id": 7,
      "accessory_id": "5",
      "accessory": "christmas-candy",
      "color1": "red",
      "color2": "red",
      "color3": "white",
      "name": "Denmark"
    },
    {
      "id": 8,
      "accessory_id": "2",
      "accessory": "donut",
      "color1": "white",
      "color2": "black",
      "color3": "blue",
      "name": "Estonia"
    },
    {
      "id": 9,
      "accessory_id": "5",
      "accessory": "christmas-candy",
      "color1": "white",
      "color2": "white",
      "color3": "blue",
      "name": "Finland"
    },
    {
      "id": 10,
      "accessory_id": "4",
      "accessory": "wcs",
      "color1": "blue",
      "color2": "white",
      "color3": "red",
      "name": "France"
    },
    {
      "id": 11,
      "accessory_id": "4",
      "accessory": "wcs",
      "color1": "yellow",
      "color2": "red",
      "color3": "black",
      "name": "Germany"
    },
    {
      "id": 12,
      "accessory_id": "2",
      "accessory": "donut",
      "color1": "white",
      "color2": "blue",
      "color3": "white",
      "name": "Greece"
    },
    {
      "id": 13,
      "accessory_id": "1",
      "accessory": "cherry",
      "color1": "red",
      "color2": "white",
      "color3": "green",
      "name": "Hungary"
    },
    {
      "id": 14,
      "accessory_id": "1",
      "accessory": "cherry",
      "color1": "orange",
      "color2": "white",
      "color3": "green",
      "name": "Ireland"
    },
    {
      "id": 15,
      "accessory_id": "2",
      "accessory": "donut",
      "color1": "red",
      "color2": "white",
      "color3": "green",
      "name": "Italy"
    },
    {
      "id": 16,
      "accessory_id": "2",
      "accessory": "donut",
      "color1": "red",
      "color2": "white",
      "color3": "red",
      "name": "Latvia"
    },
    {
      "id": 17,
      "accessory_id": "1",
      "accessory": "cherry",
      "color1": "yellow",
      "color2": "green",
      "color3": "red",
      "name": "Lithuania"
    },
    {
      "id": 18,
      "accessory_id": "2",
      "accessory": "donut",
      "color1": "red",
      "color2": "white",
      "color3": "blue",
      "name": "Luxembourg"
    },
    {
      "id": 19,
      "accessory_id": "2",
      "accessory": "donut",
      "color1": "red",
      "color2": "red",
      "color3": "white",
      "name": "Malta"
    },
    {
      "id": 20,
      "accessory_id": "5",
      "accessory": "christmas-candy",
      "color1": "red",
      "color2": "white",
      "color3": "blue",
      "name": "Netherlands"
    },
    {
      "id": 21,
      "accessory_id": "1",
      "accessory": "cherry",
      "color1": "white",
      "color2": "white",
      "color3": "red",
      "name": "Poland"
    },
    {
      "id": 22,
      "accessory_id": "4",
      "accessory": "wcs",
      "color1": "red",
      "color2": "red",
      "color3": "green",
      "name": "Portugal"
    },
    {
      "id": 23,
      "accessory_id": "2",
      "accessory": "donut",
      "color1": "red",
      "color2": "yellow",
      "color3": "blue",
      "name": "Romania"
    },
    {
      "id": 24,
      "accessory_id": "2",
      "accessory": "donut",
      "color1": "white",
      "color2": "blue",
      "color3": "red",
      "name": "Slovakia"
    },
    {
      "id": 25,
      "accessory_id": "3",
      "accessory": "chocolate",
      "color1": "white",
      "color2": "blue",
      "color3": "red",
      "name": "Slovenia"
    },
    {
      "id": 26,
      "accessory_id": "4",
      "accessory": "wcs",
      "color1": "red",
      "color2": "yellow",
      "color3": "red",
      "name": "Spain"
    },
    {
      "id": 27,
      "accessory_id": "5",
      "accessory": "christmas-candy",
      "color1": "yellow",
      "color2": "blue",
      "color3": "blue",
      "name": "Sweden"
    },
];

const sampleAccessories: AccessoryArray = [
  {
      "id": 1,
      "name": "Cherry",
      "slug": "cherry",
      
    },
    {
      "id": 2,
      "name": "Donut",
      "slug": "donut",
      
    },
    {
      "id": 3,
      "name": "Chocolate",
      "slug": "chocolate",
      
    },
    {
      "id": 4,
      "name": "Wild",
      "slug": "wcs",
      
    },
    {
      "id": 5,
      "name": "Christmas Candy",
      "slug": "christmas-candy",
      
    },
];
/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
 //const [cupcakes, setCupCakes] = useState<CupcakeArray>(sampleCupcakes);
  //const [accessories, setAccessories] = useState<AccessoryArray>(sampleAccessories);

  // Step 5: create filter state

  const [filter, setFilter] = useState<string>("");

 const filteredCupcakes = filter
  ? sampleCupcakes.filter(cupcake => cupcake.accessory_id === filter)
  : sampleCupcakes;
    

  // Step 1: get all cupcakes

  /*useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setCupCakes(data);
      });
  }, []);

  // Step 3: get all accessories

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data);
      });
  }, []);*/

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by {/* Step 5: use a controlled component for select */}
          <select
            id="cupcake-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {sampleAccessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">

        {/* Step 5: filter cupcakes before repeating */}
        {filteredCupcakes.map(cupcake => (
    <li className="cupcake-item" key={cupcake.id}>
      <Link to={`/cupcakes/${cupcake.id}`}>
        <Cupcake data={cupcake} />
      </Link>
    </li>
        /* end of block */
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
