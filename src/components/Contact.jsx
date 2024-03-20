import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    setFormData({
      ...formData,
      [inputName]: inputValue
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    const contactForm = e.target;
    const formData = new FormData(contactForm);

    fetch('/', {
      method: 'POST',
      //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //body: new URLSearchParams(formData).toString(),
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData
    })
    .then(() => console.log("Form Success"))
    .catch((error) => console.log(error));

    setFormData({
      ...formData,
      [contactForm.name]: ''
    })
  }
  
  return (
    <div id="contact" className="main-containers">
      <h1>Contact Me</h1>
      <p>Phone: 262-455-0448 (Do Leave A Message!)</p>
      <form id="contact-form" name="contact-form" netlify onSubmit={handleSubmit}>
        <input
          name="full-name" type="text"
          value={formData.name} onChange={handleInputChange}
          placeholder="name"
        />
        <input
          name="email" type="email"
          value={formData.email} onChange={handleInputChange}
          placeholder="email@mail.com"
        />
        <input
          name="phone" type="tel"
          value={formData.phone} onChange={handleInputChange}
          placeholder="###-###-####"
        />
        <textarea
          name="message" rows="5" cols="40"
          value={formData.message} onChange={handleInputChange}
          placeholder="message">
        </textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact;