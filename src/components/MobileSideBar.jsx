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
				<StyledNavLink>
					<img src={user} alt="User" />
				</StyledNavLink>
			</Block>
			<Block>
				<StyledNavLink>
					<img src={line} alt="Line" />
				</StyledNavLink>
			</Block>
			<Block>
				<StyledNavLink>
					<img src={raiting} alt="Raiting" />
				</StyledNavLink>
			</Block>
			<Block>
				<StyledNavLink>
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
		position: "fixed",
		bottom: "0",
		left: "0",
		zIndex: 1000,
		borderRadius: "7px 7px 0 0",
		justifyContent: "space-evenly",
		alignItems: "center",
		backgroundColor: "#f9f9f9",
	},
}));

const Block = styled(Box)(({ theme }) => ({
	width: "60px",
	height: "60px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	transition: "background-color 0.3s",
	borderRadius: "6px",
	"&:hover": {
		backgroundColor: "#e0e0e0",
	},
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textDecoration: "none",
	"& img": {
		width: "24px",
		height: "24px",
		transition: "filter 0.3s",
	},
	"&.active": {
		"& img": {
			filter: "invert(100%)", // or other styles to highlight active state
		},
	},
}));
