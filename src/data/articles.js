import React from "react";

function education_1() {
	return {
		date: "2021 - 2024",
		title: "BCA - Bachelor in Computer Application",
		description: (
			<React.Fragment>
				<span style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--primary-color)' }}>GIET University, Odisha</span>
				<br />
				Completed Bachelor in Computer Application. Gained foundational knowledge in programming, database management, and software development.
			</React.Fragment>
		),
		keywords: [
			"BCA",
			"Bachelor in Computer Application",
			"GIET University",
			"Odisha",
			"Computer Science",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h2>Bachelor in Computer Application</h2>
						<h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-color)', marginTop: '10px' }}>
							GIET University
						</h3>
						<p style={{ fontSize: '16px', color: 'var(--secondary-color)', marginTop: '5px' }}>Odisha</p>
						<p><strong>Duration:</strong> 2021 - 2024</p>
						<p>
							During my undergraduate studies, I developed a strong foundation in computer science
							fundamentals including programming languages, data structures, algorithms, database
							management systems, and software engineering principles.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function education_2() {
	return {
		date: "2024 - 2026",
		title: "MCA - Master in Computer Application",
		description: (
			<React.Fragment>
				<span style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--primary-color)' }}>Jain University, Bangalore</span>
				<br />
				Pursuing Master in Computer Application with specialization in Cloud Computing. Advanced expertise in distributed systems, cloud architecture, and modern development practices.
			</React.Fragment>
		),
		style: ``,
		keywords: [
			"MCA",
			"Master in Computer Application",
			"Jain University",
			"Bangalore",
			"Cloud Computing",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h2>Master in Computer Application</h2>
						<h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-color)', marginTop: '10px' }}>
							Jain University
						</h3>
						<p style={{ fontSize: '16px', color: 'var(--secondary-color)', marginTop: '5px' }}>Bangalore</p>
						<p><strong>Duration:</strong> 2024 - 2026</p>
						<p><strong>Specialization:</strong> Cloud Computing</p>
						<p>
							My postgraduate studies focus on advanced topics in computer applications with
							a specialization in Cloud Computing. I am gaining expertise in cloud architecture,
							distributed systems, containerization, microservices, and modern DevOps practices.
							This specialization is equipping me with the skills to design and implement
							scalable cloud-native applications.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [education_1, education_2];

export default myArticles;
