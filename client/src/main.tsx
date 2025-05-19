// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

/* ************************************************************************* */

import App from "./App";

import CupcakeList from "./pages/CupcakeList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import CupcakeDetails from "./pages/CupcakeDetails";

const getCupcake = (id: string) => {
	fetch("http://localhost:3310/api/cupcakes")
		.then((response) => response.json())
		.then((data) => {
			for (const cupcakeUnit of data) {
				if (cupcakeUnit.id === Number(id)) {
					return cupcakeUnit;
				}
			}
		});
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/instructions",
				element: <Instructions />,
			},
			{
				path: "/cupcakes",
				element: <CupcakeList />,
			},
			{
				path: "/cupcakes/:id",
				element: <CupcakeDetails />,
				loader: ({ params }) => {
					return getCupcake(params.id as string);
				},
			},
		],
	},
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
