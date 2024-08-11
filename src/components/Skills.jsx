import React, { useState } from "react";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaGithub,
    FaGit,
} from "react-icons/fa";
import { SiC, SiCplusplus, SiNextdotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const categories = [
    "All",
    "Languages",
    "Frameworks/Libraries",
    "Tools",
    "Databases",
];

const SkillFilter = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className="skill-filter">
            {categories.map((category) => (
                <button
                    key={category}
                    className={category === selectedCategory ? "active" : ""}
                    onClick={() => onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

const SkillCards = ({ skills, selectedCategory }) => {
    const filteredSkills = selectedCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);

    return (
        <div className="skills-container">
            {filteredSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                    <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                    </div>
                    <div className="skill-info">
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const SkillSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <section id="skills">
            <h2>Skills</h2>
            <SkillFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />
            <SkillCards
                skills={skillsData}
                selectedCategory={selectedCategory}
            />
        </section>
    );
};

const skillsData = [
    {
        name: "HTML5",
        level: "Advanced",
        icon: <FaHtml5 />,
        category: "Languages",
        color: "#E34C26", // Orange
    },
    {
        name: "CSS3",
        level: "Intermediate",
        icon: <FaCss3 />,
        category: "Languages",
        color: "#1572B6", // Blue
    },
    {
        name: "JavaScript",
        level: "Intermediate",
        icon: <FaJs />,
        category: "Languages",
        color: "#F7DF1E", // Yellow
    },
    {
        name: "TypeScript",
        level: "Beginner",
        icon: <SiTypescript />,
        category: "Languages",
        color: "#3178C6", // Blue
    },
    {
        name: "React",
        level: "Intermediate",
        icon: <FaReact />,
        category: "Frameworks/Libraries",
        color: "#61DAFB", // Light Blue
    },
    {
        name: "RTK Query",
        level: "Beginner",
        icon: <FaReact />,
        category: "Frameworks/Libraries",
        color: "#764ABC", // Purple (Redux's primary color)
    },
    {
        name: "React Router",
        level: "Intermediate",
        icon: <FaReact />,
        category: "Frameworks/Libraries",
        color: "#CA4245", // Red (React Router's primary color)
    },
    {
        name: "Tailwind",
        level: "Intermediate",
        icon: <SiTailwindcss  />,
        category: "Frameworks/Libraries",
        color: "#06B6D4", // Teal (Tailwind's primary color)
    },
    {
        name: "Redux",
        level: "Intermediate",
        icon: <FaReact />,
        category: "Frameworks/Libraries",
        color: "#764ABC", // Purple (Redux's primary color)
    },
    {
        name: "Node",
        level: "Intermediate",
        icon: <FaNodeJs />,
        category: "Tools",
        color: "#339933", // Green
    },
    {
        name: "MongoDB",
        level: "Intermediate",
        icon: <FaDatabase />,
        category: "Databases",
        color: "#47A248", // Green
    },
    {
        name: "Git",
        level: "Intermediate",
        icon: <FaGit />,
        category: "Tools",
        color: "#F05032", // Orange
    },
    {
        name: "GitHub",
        level: "Intermediate",
        icon: <FaGithub />,
        category: "Tools",
        color: "#181717", // Black
    },
    {
        name: "Next JS",
        level: 'Intermediate',
        icon: <SiNextdotjs />,
        category: "Frameworks/Libraries",
        color: 'black'
    },
    {
        name: "React-Native",
        level: 'Beginner',
        icon: <SiReact />,
        category: "Frameworks/Libraries",
        color: 'blue'
    },
    {
        name: "C++",
        level: 'Intermediate',
        icon: <SiCplusplus />,
        category: "Languages",
        color: 'blue'
    },
    {
        name: "C",
        level: 'Beginner',
        icon: <SiC />,
        category: "Languages",
        color: 'skyblue'
    },
    {
        name: "Python",
        level: "Advanced",
        icon: <SiPython color="#3776AB" />,  // Python color
        category: "Languages",
    },
]

export default SkillSection;
