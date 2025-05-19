import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

type CupcakeType = {
	id: number;
	accessory_id: string;
	accessory: string;
	color1: string;
	color2: string;
	color3: string;
	name: string;
};

function CupcakeDetails() {
	const cupcake = useLoaderData() as CupcakeType;

	return <>{cupcake ? <Cupcake data={cupcake} /> : null}</>;
}

export default CupcakeDetails;
