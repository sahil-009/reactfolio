import React from "react";

import "./styles/footer.css";

const Footer = () => {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2025 Sahil. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
