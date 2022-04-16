import { styled } from "@mui/system";

export const Container = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Pfp = styled("img")`
	object-fit: cover;
	object-position: top;
	border-radius: 100%;
	height: 100px;
	width: 100px;
`;

export const Name = styled("div")`
	font-family: "Archivo", sans-serif;
	font-size: 1.5em;
`;

export const Position = styled("div")`
	font-family: "Archivo", sans-serif;
	font-size: 1em;
`;
