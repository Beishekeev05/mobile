import React from "react";

import SignIn from "./router/SignUp";
import SignUp from "./router/SignIn";
import ForgotPassword from "./router/ForgotPassword";

const App = () => {
	return (
		<div>
			<SignUp />
			<SignIn />
			<ForgotPassword />
		</div>
	);
};

export default App;
