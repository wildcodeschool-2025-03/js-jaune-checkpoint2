import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();
  const [allCupcakes, setAllCupcakes] = useState<CupcakeArray>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        setAllCupcakes(data);
      });
  }, []);

  const cupcakeId = Number(id);
  const cupcake = allCupcakes.find((cupCake) => cupCake.id === cupcakeId);

  return cupcake ? <Cupcake data={cupcake} /> : <div>Cupcake not found.</div>;
}

export default CupcakeDetails;
