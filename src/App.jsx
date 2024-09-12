import React from "react";

import SignIn from "./router/SignUp";
import SignUp from "./router/SignIn";
import ForgotPassword from "./router/ForgotPassword";
import { Layout } from "./components/Layout";
import { createTheme } from "@mui/material";
const App = () => {

	return (
		<div>
			<Layout />
		</div>
	);
};

export default App;
