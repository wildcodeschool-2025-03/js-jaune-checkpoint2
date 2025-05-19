import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
	const { id } = useParams();
	const [cupcake, setCupcake] = useState<CupcakeType>();

	// Step 1: get all cupcakes

	useEffect(() => {
		fetch("http://localhost:3310/api/cupcakes")
			.then((response) => response.json())
			.then((data: CupcakeType[]) => {
				for (const cupcakeUnit of data) {
					if (cupcakeUnit.id === Number(id)) {
						setCupcake(cupcakeUnit);
					}
				}
			});
	}, [id]);

	return <>{cupcake ? <Cupcake data={cupcake} /> : null}</>;
}

export default CupcakeDetails;
