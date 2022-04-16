import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";

function App() {
	return (
		<BrowserRouter basename='/nucoin-website'>
			<Navbar />
			<Routes>
				<Route path='/team' element={<TeamPage />} />
				<Route path='/' element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
