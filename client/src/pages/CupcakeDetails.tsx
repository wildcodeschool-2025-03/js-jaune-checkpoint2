import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

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

function CupcakeDetails() {
  const { id } = useParams<{ id: string }>();
  const cupcake = sampleCupcakes.find((cupcake) => cupcake.id === Number(id));
  if (!cupcake) {
    return <div>Erreur: Cupcake non trouvé</div>;
  }

  return (
    <div>
      <h2>Détails du cupcake</h2>
      {/* Afficher les détails du cupcake ici */}
      <p>Nom: {cupcake.name}</p>
      <p>Accessoire: {cupcake.accessory}</p>
      <p>
        Couleurs: {cupcake.color1}, {cupcake.color2}, {cupcake.color3}
      </p>
      <Cupcake data={cupcake} />
    </div>
  );
}

export default CupcakeDetails;
