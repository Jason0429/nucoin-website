import { styled } from "@mui/system";

export const Container = styled("div")`
	position: relative;
	width: 100%;
	height: 100vh;
	background: #000000;
	color: #ffffff;
`;

export const Logo = styled("div")`
	width: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

export const LogoText = styled("div")`
	font-family: "Archivo", sans-serif;
	font-size: 1.5em;
`;

export const HuskyImg = styled("img")`
	height: 65px;
	width: 65px;
`;

export const Moon = styled("img")`
	height: 150px;
	width: 150px;
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 0;
`;

export const Rocket = styled("img")`
	position: absolute;
	height: 70%;
	bottom: 0;
	right: 20px;
	z-index: 0;
`;

export const TextContainer = styled("div")`
	font-family: "Archivo", sans-serif;
	padding: 80px;
	width: 100%;
	z-index: 10;
`;

export const Heading1 = styled("div")`
	font-weight: 500;
	font-size: 2.5em;
`;

export const Heading2 = styled("div")`
	font-weight: 500;
	font-size: 1em;
	color: #cccccc;
`;

export const PancakeSwapPromo = styled("div")`
	display: flex;
	flex-direction: column;
`;

export const PancakeSwap = styled("img")`
	height: 100%;
`;

export const PancakeSwapText = styled("img")`
	height: 60%;
`;

export const Text1 = styled("div")`
	font-family: "Archivo", sans-serif;
	color: #dddddd;
`;

export const Disrupt = styled("img")`
	width: 200px;
`;
