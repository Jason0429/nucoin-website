import QuickStartGuide from "../components/HomePage/QuickStartGuide";
import HomeSection from "../components/HomePage/HomeSection";

function HomePage() {
	return (
		<div style={{ overflowY: "hidden" }}>
			<HomeSection />
			<QuickStartGuide />
		</div>
	);
}

export default HomePage;
