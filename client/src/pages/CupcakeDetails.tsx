import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const CupcakeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [cupcake, setCupcake] = useState<flagCupcake | null>(null);

  useEffect(() => {
    const fetchCupcake = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/cupcakes/${id}`,
        );
        const data = await response.json();
        setCupcake(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du cupcake :", error);
      }
    };

    fetchCupcake();
  }, [id]);

  if (!cupcake) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Détails du Cupcake : {cupcake.name}</h1>
      <Cupcake data={cupcake} />
    </div>
  );
};

export default CupcakeDetails;
