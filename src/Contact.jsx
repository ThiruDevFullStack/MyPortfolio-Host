// Contact.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
   

    const form=useRef();


    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
          .sendForm('service_h0pz34b', 'template_wzzfplu',  form.current , {
            publicKey: '7u6M3VnoxTE-FkBjl',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Email sent successfully !")
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert("Something went wrong !")
            },
          );
        // setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact">
            <div className="contact_content">
            <h2>Contact Me</h2>
            <div className="form_content">
            <form onSubmit={sendEmail} ref={form}>
                <input type="text" name="user_name" placeholder="Your Name"  required />
                <input type="email" name="user_email" placeholder="Your Email"  required />
                <textarea name="message" placeholder="Your Message"  required />
                <button type="submit">Send</button>
            </form>
            </div> 
            </div>
        
            
        </section>
    );
};

export default Contact;
