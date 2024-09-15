import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout";
import Pay from "../components/Pay";
import About from "../components/About";
import Main from "../components/Main";
import SignIn from "../components/SignIn";

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
				{
					path: "/main",
					element: <Main />,
				},
				{
					path: "/sigin",
					element: <SignIn />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRouter;
