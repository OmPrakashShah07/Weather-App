import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-description">
        Have questions, suggestions, or feedback about our Weather App?
        We'd love to hear from you! Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            <strong>📍 Address:</strong><br />
            Kathmandu, Nepal
          </p>

          <p>
            <strong>📧 Email:</strong><br />
            weatherapp@example.com
          </p>

          <p>
            <strong>📞 Phone:</strong><br />
            +977-9812345678
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;