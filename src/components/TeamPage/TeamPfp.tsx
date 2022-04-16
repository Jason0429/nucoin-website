import { useThemeState } from "../../states/ThemeState";
import * as Styles from "../../styles/TeamPage/TeamPfp.styles";

interface Props {
	imgURL: any; // a url link or image object.
	name: string;
	position?: string;
}

function TeamPfp({ imgURL, name, position }: Props) {
	const theme = useThemeState();

	return (
		<Styles.Container>
			<Styles.Pfp src={imgURL} alt={name} />
			<Styles.Name style={{ color: theme.text.get() }}>{name}</Styles.Name>
			{position && (
				<Styles.Position style={{ color: theme.text.get() }}>{position}</Styles.Position>
			)}
		</Styles.Container>
	);
}

export default TeamPfp;
