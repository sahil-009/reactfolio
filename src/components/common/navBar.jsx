import React from "react";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
							</li>
							<li
								className={
									active === "skills"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
							</li>
							<li
								className={
									active === "education"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
