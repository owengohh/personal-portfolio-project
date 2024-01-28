import "./about.scss";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="about">
			<div className="container">
				<div className="wrapper">
					<div className="textContainer">
						<h2>Hi, I am Owen!</h2>
						<h2>Education</h2>
						<p>Singapore Management University</p>
						<p>Bsc Software Engineering with 2nd Major in Cybersecurity</p>
						<h2>Interests</h2>
						<p>Web Development</p>
						<p>Sports</p>
						<p>Travel</p>
					</div>
					<div className="imageContainer">
						<img src="/profile.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
