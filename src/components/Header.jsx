import React from 'react';
import {AiOutlineMenu} from "react-icons/ai";

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

export const HeaderPhone = ({menuOpen, setMenuOpen}) => {
    return (
      <div className={`navphone ${menuOpen? 'navphoneComes': ""}`}>
          <NavContent setMenuOpen={setMenuOpen}/>
      </div>
    )
  }

const NavContent = ({setMenuOpen}) => (
    <>
        <h2>Sameer<span> !</span></h2>
        <div>
            <a onClick={()=> setMenuOpen(false)} href="#home">Home</a>
            <a onClick={()=> setMenuOpen(false)} href="#work">Work</a>
            <a onClick={()=> setMenuOpen(false)} href="#timeline">Experience </a>
            <a onClick={()=> setMenuOpen(false)} href="#services">Services</a>
            <a onClick={()=> setMenuOpen(false)} href="#skills">Skills</a>
            <a onClick={()=> setMenuOpen(false)} href="#contact">Contact</a>
        </div>

        <a href="mailto:sameerrai350@gmail.com">
            <button>Email</button>
        </a>        

    </>
)

export default Header;