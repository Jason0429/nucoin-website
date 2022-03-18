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
	z-index: 101;

	@media screen and (max-width: 768px) {
		top: 70px;
	}
`;

export const Rocket = styled("img")`
	position: absolute;
	height: 70%;
	bottom: 0;
	right: 20px;
	z-index: 0;

	@media screen and (max-width: 850px) {
		height: 60%;
	}

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

export const TextContainer = styled("div")`
	font-family: "Archivo", sans-serif;
	padding: 80px;
	width: 100%;
	z-index: 10;

	@media screen and (max-width: 768px) {
		padding: 20px;
	}
`;

export const Heading1 = styled("div")`
	font-weight: 500;
	font-size: 3.3em;

	@media screen and (max-width: 768px) {
		font-size: 2.5em;
	}

	@media screen and (max-width: 400px) {
		font-size: 2.2em;
	}
`;

export const Heading2 = styled("div")`
	font-weight: 500;
	font-size: 1em;
	color: #cccccc;
`;
export const PancakeSwap = styled("img")`
	object-fit: contain;
	height: 40px;

	@media screen and (max-width: 768px) {
		height: 30px;
	}
`;

export const PancakeSwapText = styled("img")`
	object-fit: contain;
	height: 35px;

	@media screen and (max-width: 768px) {
		height: 30px;
	}
`;

export const Text1 = styled("div")`
	font-family: "Archivo", sans-serif;
	color: #dddddd;
`;

export const Disrupt = styled("img")`
	height: 100%;

	@media screen and (max-width: 768px) {
		height: 60px;
	}
`;

export const DisruptPromo = styled("div")`
	display: flex;
	flex-direction: column;
	width: fit-content;
	height: fit-content;
	position: absolute;
	bottom: 50px;
	left: 80px;

	@media screen and (max-width: 768px) {
		left: 20px;
		bottom: 20px;
	}
`;
