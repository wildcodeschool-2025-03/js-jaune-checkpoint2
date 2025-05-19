// import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

// interface CupcakeInterface {
//   id: number;
//   accessory_id: string;
//   accessory: string;
//   color1: string;
//   color2: string;
//   color3: string;
//   name: string;
// }

function CupcakeDetails() {
  //   useEffect(() => {
  //     fetch(`http://localhost:3310/api/cupcakes${id}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setApiCupcakes(data);
  //         console.info("Cupcakes :", data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching cupcakes:", error);
  //       });
  //   }, [id]);

  return (
    <div>
      <h1>{Cupcake.name}</h1>
    </div>
  );
}

export default CupcakeDetails;
