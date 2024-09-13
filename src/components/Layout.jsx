import { useState } from "react";
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
			<MobileSideBar />
		</Container>
	);
};

const SideBare = styled(Box)(({ theme }) => ({
	width: "300px",
	height: "100vh",
	border: "1px solid black",
	backgroundColor: "white",

	[theme.breakpoints.down("sm")]: {
		width: "45px",
		height: "45px",
		position: "absolute",
		top: "15px",
		left: "20px",
	},
}));

const MobileSideBar = styled(Box)(({ theme }) => ({
	display: "none",

	[theme.breakpoints.down("sm")]: {
		display: "block",
		width: "100%",
		height: "90px",
		border: "1px solid black",
		position: "fixed",
    backgroundColor:'red',
		bottom: "0",
		left: "0",
		zIndex: 1000,
		borderRadius: "",
	},
}));

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100vh",
	margin: "0 auto",
	position: "relative",
	overflow: "hidden",
	maxWidth: "1680px",
	minWidth: "1200px",

	[theme.breakpoints.down("sm")]: {
		maxWidth: "100%",
		minWidth: "100%",
		height: "100vh",
		display: "flex",
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
		width: "100%",
		height: "80px",
	},
}));

const LayoutContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100vh",
	backgroundColor: "grey",
	display: "flex",
}));

const Input = styled(TextField)(({ theme }) => ({
	backgroundColor: "white",
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		width: "50%",
	},
}));

const OutletBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100vh",
	backgroundColor: "white",
	overflow: "hidden",
}));
