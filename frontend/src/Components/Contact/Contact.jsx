import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a62f8582-9a7e-4468-836b-bf18375d58c4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };

  return (
    <section className="contact">
        <form onSubmit={onSubmit} >
            <h2>Contact Us</h2>
            <div className="input-box">
                <label className='label'>Full Name</label>
                <input type="text" className="field" placeholder="Enter your name" name="name" required />
            </div>

            <div className="input-box">
                <label className='label'>Email Address</label>
                <input type="email" className="field" placeholder="Enter your email" name="email" required />
            </div>

            <div className="input-box">
                <label >Your message</label>
                <textarea className="field mess" placeholder="Enter your message" name="message" required></textarea>
            </div>

            <div className="button-container">
            <button type="submit" className="btn">Send Message</button>

            </div>
            
        </form>
    </section>
  );
};

export default Contact;