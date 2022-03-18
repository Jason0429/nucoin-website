import { styled } from "@mui/system";

export const Container = styled("div")`
	min-height: 100vh;
	width: 100%;
	background: #000000;
	color: #ffffff;
	font-family: "Archivo", sans-serif;
	padding-top: 100px;
`;

export const Heading1 = styled("div")`
	font-size: 2.5em;
	font-weight: 600;
	padding: 0 80px;

	@media screen and (max-width: 768px) {
		font-size: 2em;
		padding: 0 20px;
	}
`;

export const InstructionsContainer = styled("div")`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 50px 80px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding: 50px 20px;
		gap: 20px;
	}
`;

export const InstructionsContainerLeft = styled("div")`
	display: flex;
	flex: 0.6;
	flex-direction: column;
	align-items: flex-start;
`;

export const InstructionsContainerRight = styled("div")`
	display: flex;
	flex: 0.4;
	align-items: center;
	justify-content: center;
`;

export const InstructionsLI = styled("li")`
	font-size: 1.5em;
	line-height: 1.5em;
	margin: 15px;
	color: #bcbcbc;

	@media screen and (max-width: 768px) {
		font-size: 1.3em;
	}
`;

export const DisruptDots = styled("img")`
	max-width: 200px;
	object-fit: contain;
`;

export const Text1 = styled("div")`
	color: #000000;
	font-size: 0.8em;
	font-weight: 700;
	text-transform: uppercase;
`;

export const LearnMoreLI = styled("li")`
	font-size: 1.2em;
	line-height: 1.5em;
	color: #555555;
	margin: 15px;
`;
