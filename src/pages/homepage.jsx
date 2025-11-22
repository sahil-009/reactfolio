import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import Skills from "../components/homepage/skills";
import AllProjects from "../components/projects/allProjects";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";
import "./styles/about.css";
import "./styles/contact.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					{/* HOME SECTION */}
					<section id="home">
						<div className="homepage-logo-container">
							<div style={logoStyle}>
								<Logo width={logoSize} link={false} />
							</div>
						</div>

						<div className="homepage-container">
							<div className="homepage-first-area">
								<div className="homepage-first-area-left-side">
									<div className="title homepage-title">
										{INFO.homepage.title}
									</div>

									<div className="subtitle homepage-subtitle">
										{INFO.homepage.description}
									</div>
								</div>

								<div className="homepage-first-area-right-side">
									<div className="homepage-image-container">
										<div className="homepage-image-wrapper">
											<img
												src="home.jpeg"
												alt="about"
												className="homepage-image"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="homepage-socials">
								<a
									href={INFO.socials.twitter}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faTwitter}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.stackoverflow}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faStackOverflow}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.instagram}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faInstagram}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={`mailto:${INFO.main.email}`}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMailBulk}
										className="homepage-social-icon"
									/>
								</a>
							</div>
						</div>
					</section>

					{/* PROJECTS SECTION */}
					<section id="projects" className="section-spacing">
						<div className="homepage-projects">
							<AllProjects />
						</div>
					</section>

					{/* SKILLS SECTION */}
					<section id="skills" className="section-spacing">
						<Skills skills={INFO.skills} />
					</section>

					{/* EDUCATION SECTION */}
					<section id="education" className="section-spacing">
						<div className="title" style={{ marginBottom: '40px', textAlign: 'center' }}>
							{INFO.articles.title}
						</div>

						<div className="education-content-wrapper">
							{/* Education Cards */}
							<div className="education-cards-section">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={null}
										/>
									</div>
								))}
							</div>

							{/* Work Experience */}
							<div className="education-works-section">
								<Works />
							</div>
						</div>
					</section>

					{/* ABOUT SECTION */}
					<section id="about" className="section-spacing">
						<div className="about-container">
							<div className="about-main">
								<div className="about-right-side">
									<div className="title about-title">
										{INFO.about.title}
									</div>

									<div className="subtitle about-subtitle">
										{INFO.about.description}
									</div>
								</div>

								<div className="about-left-side">
									<div className="about-image-container">
										<div className="about-image-wrapper">
											<img
												src="about.jpeg"
												alt="about"
												className="about-image"
											/>
										</div>
									</div>

									<div className="about-socials">
										<Socials />
									</div>
								</div>
							</div>
							<div className="about-socials-mobile">
								<Socials />
							</div>
						</div>
					</section>

					{/* CONTACT SECTION */}
					<section id="contact" className="section-spacing">
						<div className="contact-container">
							<div className="title contact-title">
								Let's Get in Touch: Ways to Connect with Me
							</div>

							<div className="subtitle contact-subtitle">
								Thank you for your interest in getting in touch with
								me. I welcome your feedback, questions, and
								suggestions. If you have a specific question or
								comment, please feel free to email me directly at
								&nbsp;{" "}
								<a href={`mailto:${INFO.main.email}`}>
									{INFO.main.email}
								</a>
							</div>
						</div>

						<div className="socials-container">
							<div className="contact-socials">
								<Socials />
							</div>
						</div>
					</section>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
