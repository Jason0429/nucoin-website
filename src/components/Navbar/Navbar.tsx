import * as Styles from "../../styles/Navbar.styles";
import Husky from "../../img/logo.svg";

function Navbar() {
	return (
		<Styles.Container>
			<Styles.Logo>
				<Styles.HuskyImg src={Husky} alt='NUcoin' />
				&nbsp; &nbsp;
				<Styles.LogoText>NUcoin</Styles.LogoText>
			</Styles.Logo>
			<Styles.Button>VIEW PRICE</Styles.Button>
		</Styles.Container>
	);
}

export default Navbar;
