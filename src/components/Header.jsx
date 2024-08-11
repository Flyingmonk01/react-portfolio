import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navphone ${menuOpen ? "navphoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  return (
    <>
      <h2>
        Sameer<span> !</span>
      </h2>
      <div>
        <a onClick={() => setMenuOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)} href="#work">
          Work
        </a>
        <a onClick={() => setMenuOpen(false)} href="#timeline">
          Experience{" "}
        </a>
        <a onClick={() => setMenuOpen(false)} href="#services">
          Services
        </a>
        <a onClick={() => setMenuOpen(false)} href="#skills">
          Skills
        </a>
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
        <button onClick={toggleTheme} style={{ backgroundColor: 'inherit', border:'none' }}>
          {theme === "light" ? <FaSun size={'25px'} color={theme === 'light' ? "black" : "white"} /> : <FaMoon size={'25px'} color={theme === 'light' ? "black" : "white"} />}
        </button>
      </div>

      <a href="mailto:sameerrai350@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
