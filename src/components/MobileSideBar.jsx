import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import user from "../assets/icons/user.svg";
import line from "../assets/icons/line.svg";
import raiting from "../assets/icons/raiting.svg";
import arrow from "../assets/icons/arrow.svg";

const MobileSideBar = () => {
	return (
		<MobileSideBarStyled>
			<Block>
				<StyledNavLink to="/sigin">
					<img src={user} alt="User" />
				</StyledNavLink>
			</Block>
			<Block>
				<StyledNavLink to="/main">
					<img src={line} alt="Line" />
				</StyledNavLink>
			</Block>
			<Block>
				<StyledNavLink to="/about">
					<img src={raiting} alt="Rating" />
				</StyledNavLink>
			</Block>
			<Block>
				<StyledNavLink to="/pay">
					<img src={arrow} alt="Arrow" />
				</StyledNavLink>
			</Block>
		</MobileSideBarStyled>
	);
};

export default MobileSideBar;

const MobileSideBarStyled = styled(Box)(({ theme }) => ({
	display: "none",
	[theme.breakpoints.down("sm")]: {
		display: "flex",
		width: "100%",
		height: "80px",
		borderTop: "1px solid #ccc",
		position: "sticky",
		bottom: 0,
		left: 0,
		zIndex: 1000,
		borderRadius: "7px 7px 0 0",
		justifyContent: "space-evenly",
		alignItems: "center",
		backgroundColor: "#f9f9f9",
		marginTop: "auto",
	},
}));

const Block = styled(Box)(() => ({
	width: "60px",
	height: "60px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	transition: "background-color 0.3s ease",
	borderRadius: "6px",
}));

const StyledNavLink = styled(NavLink)(() => ({
	color: "inherit",
	textDecoration: "none",
	padding: "10px",
	borderRadius: "4px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	transition: "background-color 0.3s ease, color 0.3s ease",
	"& img": {
		width: "24px",
		height: "24px",
		transition: "filter 0.3s ease",
	},
	"&.active": {
		backgroundColor: "#637E7E",
		"& img": {
			filter: "brightness(0) invert(1)",
		},
	},
}));
