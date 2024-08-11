import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle,  AiOutlineArrowUp } from 'react-icons/ai'
import ig from "../assets/5.png";

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={ig} alt='programmer' />

            <h2>Sameer Rai</h2>
            <p>
                A PROGRAMMER Is a Person who checks both sides when crossing the road.
            </p>
        </div>

        <aside>
            <h2>Social Media</h2>
            <a href='https://x.com/Flying_Monk_' target='blank'><AiFillTwitterCircle /></a>
            <a href='https://www.instagram.com/flying.monk_/' target='blank'><AiFillInstagram /></a>
            <a href='https://github.com/Flyingmonk01' target='blank'><AiFillGithub/></a>
            <a href='https://www.linkedin.com/in/raisameer/' target='blank'><AiFillLinkedin/></a>
        </aside>
        <a href='#home' ><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer