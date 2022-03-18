import { styled } from "@mui/system";

export const Container = styled("div")`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* border: thin solid white; */
	padding: 0 80px;
	background: #000000;
	color: #ffffff;
	z-index: 100;

	@media screen and (max-width: 768px) {
		padding: 0 10px;
	}
`;

export const Logo = styled("div")`
	width: fit-content;
	/* border: thin solid white; */
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoText = styled("div")`
	font-family: "Archivo", sans-serif;
	font-size: 2em;
	font-weight: 600;
`;

export const HuskyImg = styled("img")`
	height: 50px;
	width: 50px;
`;

export const Button = styled("div")`
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	font-family: "Archivo", sans-serif;
	font-size: 0.8em;
	border-radius: 20px;
	padding: 10px 20px;
	font-weight: 700;
	background: #ffffff;
	color: #000000;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		position: relative;
		left: 0;
		transform: none;
	}
`;
