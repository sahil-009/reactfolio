import React from "react";
import "./styles/skills.css";

const Skills = ({ skills }) => {
    return (
        <div className="skills-container">
            <div className="skills-title">{skills.title}</div>
            <div className="skills-grid">
                {skills.categories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <div className="skill-category-name">{category.name}</div>
                        <div className="skill-items">
                            {category.items.map((item, itemIndex) => (
                                <span key={itemIndex} className="skill-item">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
