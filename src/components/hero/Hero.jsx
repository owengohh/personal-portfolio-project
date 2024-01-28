import "./hero.scss";
import { motion } from "framer-motion";
import {Link} from "react-scroll";

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-220%",
		opacity: 1,
		transition: {
			duration: 10,
			repeat: Infinity,
			repeatType: "mirror",
		},
	},
};

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate">
					<motion.h2 variants={textVariants}>OWEN GOH</motion.h2>
					<motion.h1 variants={textVariants}>Aspiring Web Developer</motion.h1>
					<motion.div className="buttons" variants={textVariants}>
						<Link to="Projects" smooth="true">
							<motion.button variants={textVariants}>
								See my Latest Works
							</motion.button>
						</Link>
						<Link to="Contact" smooth="true">
							<motion.button variants={textVariants}>Contact Me</motion.button>
						</Link>
					</motion.div>
					<motion.img
						src="/scroll.png"
						alt=""
						animate="scrollButton"
						variants={textVariants}
					/>
				</motion.div>
			</div>
			<motion.div
				className="slidingTextContainer"
				variants={sliderVariants}
				initial="initial"
				animate="animate">
				OWEN GOH
			</motion.div>
			<div className="imageContainer">
				<img src="/hero2.png" alt="" />
			</div>
		</div>
	);
};

export default Hero;
