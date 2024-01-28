import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const item = [
	{
		id: 1,
		title: "Reventé",
		img: "/revente.png",
		desc: "A web application that helps to simplify the process of selling pre-loved clothes and the purchasing of preloved clothes.",
		link: "https://smu-wad2.web.app/",
	},
	{
		id: 2,
		title: "FarmFinds",
		img: "/farmfinds.png",
		desc: "A mobile application that connects farmers to consumers, addressing UN SDG 12, attaining more responsible consumption and production.",
		link: "https://github.com/SSSamueLDS/googleignite_team7",
	},
	{
		id: 3,
		title: "Viiicky",
		img: "/vicky.png",
		desc: "A web application that enables colourblind individuals to identify colours and for others to experience what a colourblind person sees.",
		link: "https://vicky-nine.vercel.app/",
	},
];

const toLink = (url) => {
	window.open(url);
};

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="imgContainer" ref={ref}>
						<img src={item.img} alt="" />
					</div>
					<motion.div className="textContainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button onClick={() => toLink(item.link)}>Check it out!</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end ", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 10,
	});

	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1>Projects</h1>
				<motion.div style={{ scaleX }} className="progressBar"></motion.div>
			</div>
			{item.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
