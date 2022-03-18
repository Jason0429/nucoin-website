import Navbar from "../Navbar/Navbar";
import Spacer from "../Global/Spacer";
import * as Styles from "../../styles/HomePage/HomeSection.styles";
import Rocket from "../../img/rocket.svg";
import Moon from "../../img/moon.svg";
import PancakeSwap from "../../img/pancakeswap.svg";
import PancakeSwapText from "../../img/pancakeswap-text.svg";
import Disrupt from "../../img/disrupt.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

function HomeSection() {
	return (
		<>
			<Navbar />
			<Styles.Container>
				<Styles.Moon src={Moon} alt='moon' />
				<Styles.Rocket src={Rocket} alt='rocket' />

				<Spacer width='100%' height='200px' />

				<Fade delay={100} triggerOnce>
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

						<Stack direction='column'>
							<Styles.Text1>Available on</Styles.Text1>
							<br />
							<Stack direction='row' alignItems='center' width='fit-content'>
								<Styles.PancakeSwap src={PancakeSwap} alt='PancakeSwap' />
								&nbsp;
								<Styles.PancakeSwapText src={PancakeSwapText} alt='PancakeSwap' />
							</Stack>
						</Stack>
					</Styles.TextContainer>
				</Fade>

				<Fade delay={1000} triggerOnce>
					<Styles.DisruptPromo>
						<Styles.Text1>Made By</Styles.Text1>
						<Styles.Disrupt src={Disrupt} alt='Disrupt' />
					</Styles.DisruptPromo>
				</Fade>

				<Link activeClass='active' to='quick-start' spy={true} smooth={true} duration={500}>
					<Tooltip title='Get Started'>
						<IconButton
							sx={{
								position: "absolute",
								bottom: "50px",
								left: "50%",
								transform: "translate(-50%, 0)",
								background: "#333333",
								zIndex: "10"
							}}
							href='#quick-start'
						>
							<KeyboardArrowDownIcon
								sx={{
									fill: "white"
								}}
							/>
						</IconButton>
					</Tooltip>
				</Link>
			</Styles.Container>
		</>
	);
}

export default HomeSection;
