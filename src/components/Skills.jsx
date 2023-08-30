import React from "react";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const skills = [
    {
        name: "HTML",
        description: "Creating structured web content.",
        icon: <FaHtml5 />,
        level: "advanced", 
    },
    {
        name: "CSS",
        description: "Styling web pages for a polished look.",
        icon: <FaCss3 />,
        level: "intermediate",
    },
    {
        name: "React",
        description: "Building interactive and dynamic user interfaces.",
        icon: <FaReact />,
        level: "intermediate",
    },
    {
        name: "Node.js",
        description: "Creating server-side applications.",
        icon: <FaNodeJs />,
        level: "beginner",
    },
    {
        name: "Databases",
        description: "Working with databases to store and retrieve data.",
        icon: <FaDatabase />,
        level: "beginner",
    },
];



const SkillSection = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`skill ${skill.level}`} // Add skill level as a class
                        data-level={skill.level} // Add data-level attribute
                    >
                        {skill.icon}
                        <div className="content">
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: getProgressBarWidth(skill.level) }}></div>
                            </div>
                        </div>
                        <a href="https://www.linkedin.com/in/raisameer/details/skills/" target="blank">
                            <button className="endorseBtn">Endorse</button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillSection;


const progressBarWidths = {
    beginner: "30%",
    intermediate: "60%",
    advanced: "90%",
};

function getProgressBarWidth(level) {
    if (progressBarWidths.hasOwnProperty(level)) {
        return progressBarWidths[level];
    } else if (typeof level === "string" && level.endsWith("%")) {
        return level;
    } else if (typeof level === "number") {
        return level + "%";
    } else {
        return "0%";
    }
}

