import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import ReadArticle from "./pages/readArticle";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<Homepage />} />
				<Route path="/projects" element={<Homepage />} />
				<Route path="/articles" element={<Homepage />} />
				<Route path="/education" element={<Homepage />} />
				<Route path="/contact" element={<Homepage />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
