import React, { useState } from 'react';
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from 'framer-motion';
import {addDoc, collection} from 'firebase/firestore';
import {db} from "../firebase";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disablebtn, setDisablebtn] = useState(false);
    

    const submitHandler = async (e) => {
        e.preventDefault();
        setDisablebtn(true);
        try {
            await addDoc(collection(db, "contacts"), {name, email, message});

            setName("");
            setEmail("");
            setMessage("");
            toast.success("Message sent");
            setDisablebtn(false);
        } catch (error) {
            toast.error("Error");
            console.log(error);
            setDisablebtn(false);
        }
    }

    const animations = {
        form: {
            initial: {
                x: "-100%", opacity: 0,
            },
            whileInView: {
                x: 0, opacity: 1,
            }
        }
        ,
        button: {
            initial: {
                y: "-100%", opacity: 0,
            },
            whileInView: {
                y: 0, opacity: 1,
            },

            transition: {
                delay: 0.5,
            }
        }
    }


    return (
        <div id='contact'>
            <section>

                <motion.form onSubmit={submitHandler} {...animations.form}>
                    <h2>Contact Me</h2>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' required />

                    <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <input type="text" placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)} required />

                    <motion.button className={disablebtn ? "disableBtn" : ""}disabled={disablebtn} {...animations.button} type='submit'>Send</motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt='' />
            </aside>
        </div>
    )
}

export default Contact