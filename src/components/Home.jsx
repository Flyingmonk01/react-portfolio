import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/5.png";
import resumePDF from '../assets/sam res.pdf'

const ResumeButton = () => {
  const openResume = () => {
    window.open(resumePDF, '_blank', 'width=1960,height=1080'); // Adjust size as needed
  };

  return (
    <button id="resumeBtn" onClick={openResume}>
      Resume
    </button>
  );
};

// export default ResumeButton;

const Home = ({ ratio }) => {


  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 600, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };


  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0%",
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /><span style={{color: `var(--color3)`}}>Sameer Rai</span>
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Freelancer", "A Mathematician", "A Teacher", "A Software Engineer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
            
          />

          <div>
            <a href="mailto:sameerrai350@gmail.com">Hire Me</a>
            <div className="App" style={{border: '2px dotted var(--color6_2', borderRadius: '10px 0'}}>
              <ResumeButton />
            </div>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {(
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>DSA Problem Solved</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {(
                  <motion.span
                    whileInView={animationProjectsCount}
                    ref={projectCount}
                  >
                    10
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>sameerrai350@gmail.com</span>
              <br />
              <span>+91-7355442696</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Sameer" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;