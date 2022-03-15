import Navbar from "../components/Navbar/Navbar";
import Spacer from "../components/Global/Spacer";
import * as Styles from "../styles/HomePage.styles";
import Rocket from "../img/rocket.svg";
import Moon from "../img/moon.svg";
import PancakeSwap from "../img/pancakeswap.svg";
import PancakeSwapText from "../img/pancakeswap-text.svg";
import Disrupt from "../img/disrupt.svg";
import { Stack } from "@mui/material";

function HomePage() {
	return (
		<>
			<Navbar />
			<Styles.Container>
				<Styles.Moon src={Moon} alt='moon' />
				<Styles.Rocket src={Rocket} alt='rocket' />

				<Spacer width='100%' height='200px' />
				<Styles.TextContainer>
					<Styles.Heading1>
						The first decentralized
						<br />
						university coin made
						<br />
						by students.
					</Styles.Heading1>
					<br />
					<Styles.Heading2>Designed by Northeastern students in WEB3</Styles.Heading2>

					<Spacer width='100%' height='100px' />

					<Styles.PancakeSwapPromo>
						<Styles.Text1>Available on</Styles.Text1>
						<br />
						<Stack
							direction='row'
							alignItems='center'
							width='fit-content'
							height='50px'
						>
							<Styles.PancakeSwap src={PancakeSwap} alt='PancakeSwap' />
							&nbsp;
							<Styles.PancakeSwapText src={PancakeSwapText} alt='PancakeSwap' />
						</Stack>
					</Styles.PancakeSwapPromo>
				</Styles.TextContainer>

				<Stack
					direction='column'
					width='fit-content'
					sx={{
						position: "absolute",
						bottom: "50px",
						left: "80px"
					}}
				>
					<Styles.Text1>Made By</Styles.Text1>
					<Styles.Disrupt src={Disrupt} alt='Disrupt' />
				</Stack>
			</Styles.Container>
		</>
	);
}

export default HomePage;
