import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<Container>
			<LayoutContainer>
				<SideBare />
				<OutletBox>
					<HeaderInput>
						<Input placeholder="Поиск" />
					</HeaderInput>
					<Outlet />
				</OutletBox>
			</LayoutContainer>
		</Container>
	);
};

const SideBare = styled(Box)(({ theme }) => ({
	width: "400px",
	height: "100vh",
	border: "1px solid black",
	backgroundColor: "white",

	[theme.breakpoints.down("sm")]: {
		width: "50px",
		height: "50px",
		position: "absolute",
		top: 0,
	},
}));

const Container = styled(Box)(({ theme }) => ({
	maxWidth: "1680px",
	width: "100%",
	height: "100vh",
	backgroundColor: "bisque",
	margin: "0 auto",
	minWidth: "1200px",
	position: "relative",

	[theme.breakpoints.down("sm")]: {
		width: "100px",
		height: "100vh",
		border: "1px solid black",
	},
}));

const HeaderInput = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100px",
	backgroundColor: "yellow",
	borderBottom: "1px solid white",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	[theme.breakpoints.down("sm")]: {
		backgroundColor: "white",
		border: "1px solid black",
		height: "150px",
		display: "flex",
	},
}));

const LayoutContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100vh",
	backgroundColor: "grey",
	display: "flex",
	[theme.breakpoints.down("sm")]: {
		width: "100px",
		backgroundColor: "green",
	},
}));

const Input = styled(TextField)(({ theme }) => ({
	backgroundColor: "white",
	width: "450px",
	[theme.breakpoints.down("sm")]: {
		width: "60%",
		backgroundColor: "yellow",
	},
}));

const OutletBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100vh",
	backgroundColor: "white",
}));
