import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
	return (
		<div className="navbar">
			<Sidebar></Sidebar>
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}>
					Owen Goh
				</motion.span>
				<div className="social">
					<a href="https://www.linkedin.com/in/owengohh/">
						<img src="linkedin-48.png" alt="linkedin"></img>
					</a>
					<a href="https://github.com/owengohh">
						<img src="github-48.png" alt="github"></img>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar




