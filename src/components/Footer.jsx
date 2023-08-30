import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'
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
            <a href='https://youtube.com/' target='blank'><AiFillYoutube /></a>
            <a href='https://instagram.com/' target='blank'><AiFillInstagram /></a>
            <a href='https://github.com/' target='blank'><AiFillGithub/></a>
        </aside>
        <a href='#home' ><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer