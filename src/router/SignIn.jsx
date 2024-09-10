import {
	Box,
	Button,
	InputAdornment,
	styled,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import gmail from "../assets/gmail.svg";
import pass from "../assets/pass.svg";
import Gogle from "../assets/Gogle.svg";

const SignIn = () => {
	return (
		<Container>
			<Logo>
				<Img src={"src/assets/Logo.png"} alt="Logo" />
				<TypographyStyled>Добро пожаловать</TypographyStyled>
			</Logo>
			<Block>
				<BlockOne>Регистрация</BlockOne>
				<BlockTwo>
					<Input
						InputProps={{
							endAdornment: (
								<InputAdornment sx={{ position: "relative" }} position="end">
									<img
										style={{
											position: "absolute",
											right: "-12px",
											width: "18px",
											height: "18px",
										}}
										src={gmail}
										alt="Gmail"
									/>
								</InputAdornment>
							),
						}}
						placeholder="Email"
					/>
					<Input
						InputProps={{
							endAdornment: (
								<InputAdornment sx={{ position: "relative" }} position="end">
									<img
										style={{ position: "absolute", right: "-13px" }}
										src={pass}
										alt="Gmail"
									/>
								</InputAdornment>
							),
						}}
						placeholder="Password"
					/>
				</BlockTwo>
				<BlockThree>
					<ButtonStyled fullWidth>Регестрация</ButtonStyled>
					<ButtonStyledTwo fullWidth startIcon={<img src={Gogle} />}>
						Регестрация с Google
					</ButtonStyledTwo>
					<TypographyMui>Войти</TypographyMui>
				</BlockThree>
			</Block>
		</Container>
	);
};

export default SignIn;

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	maxWidth: "1440px",
	minHeight: "1200px",
	backgroundColor: "bisque",
	height: "100%",
	margin: "0 auto",

	[theme.breakpoints.down("sm")]: {
		maxWidth: "100%",
		padding: "0 16px",
		minHeight: "600px",
		backgroundColor: "white",
	},
}));

const Block = styled(Box)(({ theme }) => ({
	width: "100px",
	height: "50px",
	[theme.breakpoints.down("sm")]: {
		backgroundColor: "white",
		width: "283px",
		height: "350px",
		boxShadow: " 0px 0px 19px 3px rgba(34, 60, 80, 0.2)",
		margin: "0 auto",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		gap: "10px",
	},
}));

const Logo = styled(Box)(({ theme }) => ({
	width: "400px",
	height: "200px",
	[theme.breakpoints.down("sm")]: {
		width: "200px",
		height: "100px",
		margin: "50px 0 25px 60px",

		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "end",
	},
}));

const Img = styled("img")(({ theme }) => ({
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		width: "120px",
		height: "55px",
	},
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
	fontSize: "18px",
	fontFamily: "Montserrat",
	fontWeight: "500",
	textAlign: "center",
	[theme.breakpoints.down("sm")]: {
		fontSize: "18px",

		fontFamily: "Montserrat,sans-serif",
		textAlign: "center",
	},
}));

const BlockOne = styled(Box)(({ theme }) => ({
	width: "300px",
	height: "100px",
	textAlign: "center",
	[theme.breakpoints.down("sm")]: {
		width: "145px",
		height: "27px",
		margin: "5px auto",
		textAlign: "center",
		fontWeight: "500",
		fontSize: "22px",
		fontFamily: "Montserrat,sans-serif",
	},
}));

const BlockTwo = styled(Box)(({ theme }) => ({
	width: "300px",
	height: "100px",
	[theme.breakpoints.down("sm")]: {
		width: "245px",
		height: "88px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: "20px",
		marginBottom: "15px",
	},
}));

const BlockThree = styled(Box)(({ theme }) => ({
	width: "300px",
	height: "100px",
	[theme.breakpoints.down("sm")]: {
		width: "221px",
		height: "127px",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		alignItems: "center",
	},
}));

const Input = styled(TextField)(({ theme }) => ({
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		"& .MuiOutlinedInput-root": {
			height: "25px",
			border: "none",
		},

		"& .MuiOutlinedInput-notchedOutline": {
			border: "none",
			borderBottom: "1px solid black",
			borderRadius: "0px",
		},

		"& .MuiOutlinedInput-input": {
			border: "none",
		},
	},
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
	backgroundColor: "#37D3D3",
	[theme.breakpoints.down("sm")]: {
		backgroundColor: "#37D3D3",
		color: "white",
	},
}));
const ButtonStyledTwo = styled(Button)(({ theme }) => ({
	backgroundColor: "white",
	border: "1px solid black",
	[theme.breakpoints.down("sm")]: {
		backgroundColor: "white",
		color: "black",
		fontSize: "12px",
		border: "1px solid black",
	},
}));

const TypographyMui = styled(Typography)(({ theme }) => ({
	color: "#9A9A9A",
	fontFamily: "Montserrat,sans-serif",
	[theme.breakpoints.down("sm")]: {
		color: "#9A9A9A",
		fontFamily: "Montserrat,sans-serif",
		fontSize: "12px",
		textDecoration: "underline",
	},
}));
