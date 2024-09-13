import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout";
import Pay from "../components/Pay";
import About from "../components/About";

const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/pay",
					element: <Pay />,
				},
				{
					path: "/about",
					element: <About />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRouter;
