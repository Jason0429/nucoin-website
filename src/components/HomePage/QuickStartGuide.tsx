import * as Styles from "../../styles/HomePage/QuickStartGuide.styles";
import { Fade } from "react-awesome-reveal";
import info from "../../data/info.json";
import DisruptDots from "../../img/disrupt-dots.svg";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function QuickStartGuide() {
	return (
		<Styles.Container id='quick-start'>
			<Fade delay={500} triggerOnce>
				<Styles.Heading1>How To Buy NUcoin</Styles.Heading1>
			</Fade>

			<Styles.InstructionsContainer>
				<Styles.InstructionsContainerLeft>
					<ol>
						<Fade delay={1000} cascade triggerOnce>
							{info.instructions.map((instr) => (
								<Styles.InstructionsLI>{instr}</Styles.InstructionsLI>
							))}

							{/* Learn More */}
							<Accordion sx={{ marginTop: "15px" }} disableGutters>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Styles.Text1>Learn More</Styles.Text1>
								</AccordionSummary>
								<AccordionDetails>
									<ul
										style={{
											padding: "10px 20px"
										}}
									>
										{info.coinInfo.map((coinInfo) => (
											<Styles.LearnMoreLI>{coinInfo}</Styles.LearnMoreLI>
										))}
									</ul>
								</AccordionDetails>
							</Accordion>
						</Fade>
					</ol>
				</Styles.InstructionsContainerLeft>
				<Styles.InstructionsContainerRight>
					<Styles.DisruptDots src={DisruptDots} alt='Disrupt Dots' />
				</Styles.InstructionsContainerRight>
			</Styles.InstructionsContainer>
		</Styles.Container>
	);
}

export default QuickStartGuide;
