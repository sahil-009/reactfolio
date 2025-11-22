import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						{date}
					</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description">
						{description}
					</div>
					{link && (
						<div className="homepage-article-link">
							<Link to={link}>
								Read article{" "}
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faChevronRight}
								/>
							</Link>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
