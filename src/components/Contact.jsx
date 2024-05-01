import  { useState } from 'react';
import { IoMailUnreadOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";
import '../styles/contact.css';
import ShineButton from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "749f65c2-c73f-4dcf-96a7-0b5fd2b56087");

    const object = Object.fromEntries(formDataToSend);
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
      alert(res.message);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&#39;s talk</h1>
          <p>Your messages brighten my day; keep them coming, please!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoMailUnreadOutline /><p>amanchaubey86@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoCallOutline /><p>+918881503310</p>
            </div>
            <div className="contact-detail">
              <IoLocationOutline /><p>Varanasi, UttarPradesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
          <label htmlFor="message">Enter your message here.</label>
          <textarea name="message" rows="8" placeholder="Enter your message..." value={formData.message} onChange={handleChange}></textarea>
          <ShineButton />
        </form>
      </div>
    </div>
  );
};

export default Contact;
