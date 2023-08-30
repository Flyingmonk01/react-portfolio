import React from 'react'
import {motion} from 'framer-motion';
import {AiFillIeCircle} from 'react-icons/ai';
import { IoSchoolOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
const Services = () => {


    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        
        one:{
            opacity:0,
            x: "-100%",
        },
        twoAndThree:{
            opacity: 0,
            y: "-100%",
        },
        four:{
            opacity: 0,
            x: "100%",
        }
    }


  return (
    <div id='services'>
        <h2>Services</h2>
        <section>
            <motion.div className = 'serviceBox1' whileInView={animations.whileInView}
            initial = {animations.one}>
                <h3>6+</h3>
                <p>Months of Experience</p>
            </motion.div>

            <motion.div className = 'serviceBox2'
            whileInView={animations.whileInView}
            initial = {animations.twoAndThree}>
                <AiFillIeCircle />
                <span>Web Development</span>
            </motion.div>

            <motion.div className = 'serviceBox3'
            whileInView={animations.whileInView}
            initial = {animations.twoAndThree}>
                <FaCode size={50} />
                <span>Coder</span>
            </motion.div>

            <motion.div className = 'serviceBox4'
            whileInView={animations.whileInView}
            initial = {animations.four}
            transition={{
                delay: "0.2",
            }}>
                <IoSchoolOutline size={50} />
                <span>Mathematician </span>
            </motion.div>
        </section>
    </div>
  )
}

export default Services