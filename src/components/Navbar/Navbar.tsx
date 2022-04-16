import * as Styles from "../../styles/Navbar.styles";
import Husky from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();
	return (
		<Styles.Container>
			<Styles.Logo>
				<Styles.HuskyImg src={Husky} alt='NUcoin' />
				&nbsp; &nbsp;
				<Styles.LogoText>NUcoin</Styles.LogoText>
			</Styles.Logo>
			<Styles.Button>VIEW PRICE</Styles.Button>
			<Styles.Button onClick={() => navigate("/team")}>Meet the Team</Styles.Button>
		</Styles.Container>
	);
}

export default Navbar;
