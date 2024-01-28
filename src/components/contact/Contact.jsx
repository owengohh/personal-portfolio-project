import "./contact.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const Contact = () => {
	const ref = useRef();
	const formRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_gevz5c5",
				"template_vjr7rea",
				formRef.current,
				"2wkqh-rsHN1l8ghoG"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<motion.div
			ref={ref}
			className="contact"
			variants={variants}
			initial="initial"
			whileInView="animate">
			<motion.div className="textContainer" variants={variants}>
				<motion.h1 variants={variants}>Let's Connect!</motion.h1>
				<motion.div className="item" variants={variants}>
					<h2>Email</h2>
					<span>owengoh2001@gmail.com</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h2>Phone</h2>
					<span>+65 96479601</span>
				</motion.div>
			</motion.div>
			<div className="formContainer">
				
				<motion.form
					ref = {formRef}
					onSubmit={sendEmail}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 1, duration: 0.5}}>
					<input type="text" name="name" id="" required placeholder="Name" />
					<input type="email" name="email" id="" required placeholder="Email" />
					<textarea rows={8} placeholder="Message" name="message"></textarea>
					<button>Submit</button>
				</motion.form>
			</div>
		</motion.div>
	);
};

export default Contact;
