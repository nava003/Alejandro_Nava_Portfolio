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

    if (inputName === 'full-name') {
      setFormData({
        ...formData,
        name: inputValue
      });
    } else if (inputName === 'email') {
      setFormData({
        ...formData,
        email: inputValue
      });
    } else if (inputName === 'phone') {
      setFormData({
        ...formData,
        phone: inputValue
      })
    } else {
      setFormData({
        ...formData,
        message: inputValue
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    


  }
  
  return (
    <div id="contact-container">
      <h1>Contact Me</h1>
      <p>Phone: 262-455-0448 (Do Leave A Message!)</p>
      <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
        <input name="full-name" type="text" value={formData.name} placeholder="name"/>
        <input name="email" type="email" value={formData.email} placeholder="email@mail.com"/>
        <input name="phone" type="tel" value={formData.phone} placeholder="###-###-####"/>
        <textarea name="message" rows="5" cols="40" value={formData.message} placeholder="message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact;