import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { Outlet } from "react-router-dom";
import MobileSideBar from "./MobileSideBar";

export const Layout = () => {
	return (
		<Container>
			<LayoutContainer>
					<SideBare />
				<OutletBox>
						<HeaderInput>
							<Input size="small" placeholder="Поиск" />
						</HeaderInput>
						<div style={{ padding: "0 5px " }}>
							<Outlet />
						</div>
				</OutletBox>
			</LayoutContainer>
			<MobileSideBar />
		</Container>
	);
};

// Стиль для бокового меню
const SideBare = styled(Box)(({ theme }) => ({
	width: "300px",
	height: "100vh",
	border: "1px solid black",
	backgroundColor:"red",

	[theme.breakpoints.down("sm")]: {
		backgroundColor: "red",
		width: "45px",
		height: "45px",
		position: "absolute",
		top: "10px",
		left: "20px",
		zIndex: 1100,
	},
}));

// Главный контейнер
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
		flexDirection: "column",
	},
}));

// Ввод в заголовке
const HeaderInput = styled("header")(({ theme }) => ({
	width: "100%",
	height: "100px",
	backgroundColor: "yellow",
	borderBottom: "3px solid green",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "sticky",
	top: 0,
	zIndex: 1000,

	[theme.breakpoints.down("sm")]: {
		height: "70px",
	},
}));

// Основной макет контейнера
const LayoutContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100%",
	display: "flex",
	paddingBottom: "80px",
}));

// Поле ввода
const Input = styled(TextField)(({ theme }) => ({
	width: "40%",
	"& .MuiOutlinedInput-root": {
		borderRadius: "10px",
		backgroundColor: "white",
	},
	[theme.breakpoints.down("sm")]: {
		width: "50%",
		"& .MuiOutlinedInput-root": {
			height: "45px",
		},
	},
}));

// Контейнер для Outlet
const OutletBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100%",
	backgroundColor: "white",
	overflow: "auto",
}));
