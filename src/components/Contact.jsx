import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const initialState = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
  }
  
  const [formData, setFormData] = useState(initialState);
  
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
      formData, {publicKey: import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY}
    )
    .then(
      () => {
        setFormData(initialState);
        alert('Thank you for contacting me!\nPlease allow me to respond as soon as possible!');
      },
      (error) => {
        alert('Hmm, something\'s not right...\nPerhaps a page refresh could resolve the issue?');
        console.log(error.text);
      }
    );

  }
  
  return (
    <div id="contact" className="main-containers">
      <h1 className="vertical-header">Contact Me</h1>
      <div id="contact-group">
        <div id="contact-self">
          <h3>Email: navaa003@gmail.com</h3>
          <h3>Phone: 262-455-0448<br/>(Do Leave A Message!)</h3>
        </div>

        <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
          <input
            name="fullName" value={formData.fullName} type="text"
            onChange={handleInputChange} placeholder="name" required
          />
          <input
            name="email" value={formData.email} type="email"
            onChange={handleInputChange} placeholder="email@mail.com" required
          />
          <input
            name="phone" value={formData.phone} type="tel"
            onChange={handleInputChange} placeholder="###-###-#### (optional)"
          />
          <textarea
            name="message" value={formData.message} rows="5" cols="40"
            onChange={handleInputChange} placeholder="message" required>
          </textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;