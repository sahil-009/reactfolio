import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./briefcase.png"
								alt="internship"
								className="work-image"
							/>
							<div className="work-details">
								<div className="work-title">Mutual Global Pvt Ltd</div>
								<div className="work-subtitle">
									Laravel Developer (Intern - Hybrid)
								</div>
								<div className="work-duration">Bangalore, India</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
