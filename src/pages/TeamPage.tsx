import { useThemeState } from "../states/ThemeState";
import * as Styles from "../styles/TeamPage/TeamPage.styles";
import info from "../data/info";
import TeamPfp from "../components/TeamPage/TeamPfp";

function TeamPage() {
	const theme = useThemeState();

	return (
		<Styles.Container
			style={{
				background: theme.background.get()
			}}
		>
			<Styles.Title
				style={{
					color: theme.text.get()
				}}
			>
				Meet the Team
			</Styles.Title>
			<Styles.GridContainer>
				{info.teamMembers.map((member, key) => (
					<TeamPfp
						key={key}
						imgURL={member.imgURL}
						name={member.name}
						position={member?.position}
					/>
				))}
			</Styles.GridContainer>
		</Styles.Container>
	);
}

export default TeamPage;
