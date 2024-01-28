import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
	return (
		<div>
			<section id="Homepage">
				<Navbar></Navbar>
				<Hero></Hero>
			</section>
			<section id="About">
				<Parallax type="about"></Parallax>
			</section>
			<section>
				<About></About>
			</section>
			<section id="Projects">
				<Parallax type="portfolio"></Parallax>
			</section>
			<Portfolio></Portfolio>
			<section id="Contact">
				<Contact></Contact>
			</section>
		</div>
	);
};

export default App;
