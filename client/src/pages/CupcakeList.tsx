import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */

type AccessoryArray = { id: number; name: string; slug: string }[];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
	const [cupcakeList, setCupcakeList] = useState<CupcakeArray>([]);
	const [accessoriesList, setAccessoriesList] = useState<AccessoryArray>([]);
	const [selectedAccessory, setSelectedAccessory] = useState("");

	// Step 1: get all cupcakes

	useEffect(() => {
		fetch("http://localhost:3310/api/cupcakes")
			.then((response) => response.json())
			.then((data) => {
				setCupcakeList(data);
			});
	}, []);

	// Step 3: get all accessories

	useEffect(() => {
		fetch(" http://localhost:3310/api/accessories")
			.then((response) => response.json())
			.then((data) => {
				setAccessoriesList(data);
			});
	}, []);

	// Step 5: create filter state
	const HandleSelectionChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setSelectedAccessory(event.target.value);
	};

	return (
		<>
			<h1>My cupcakes</h1>

			<form className="center">
				<label htmlFor="cupcake-select">
					{/* Step 5: use a controlled component for select */}
					Filter by{" "}
					<select id="cupcake-select" onChange={HandleSelectionChange}>
						<option value="">---</option>
						{/* Step 4: add an option for each accessory */}
						{accessoriesList.map((accessory) => (
							<option key={accessory.id} value={accessory.id}>
								{accessory.name}
							</option>
						))}
					</select>
				</label>
			</form>

			<ul className="cupcake-list" id="cupcake-list">
				{/* Step 2: repeat this block for each cupcake */}
				{/* Step 5: filter cupcakes before repeating */}
				{cupcakeList.map((cupcake) =>
					cupcake.accessory_id === selectedAccessory ||
					selectedAccessory === "" ? (
						<li key={cupcake.id} className="cupcake-item">
							<Cupcake data={cupcake} />
						</li>
					) : null,
				)}
				{/* end of block */}
			</ul>
		</>
	);
}

export default CupcakeList;
