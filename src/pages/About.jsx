import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Weather App</h1>

      <p>
        Welcome to the Weather App, a simple and reliable platform designed to
        help users check real-time weather information for major cities around
        the world. Pick a city from the list to view the latest weather
        conditions instantly. The application provides accurate weather data in
        a clean, responsive, and easy-to-use interface.
      </p>

      <h2>Features</h2>
      <ul>
        <li>🌍 Choose from a selection of major cities worldwide.</li>
        <li>🌡️ View the current temperature.</li>
        <li>🔄 Switch the temperature unit between Celsius (°C) and Fahrenheit (°F).</li>
        <li>🤗 Check the "Feels Like" temperature.</li>
        <li>💧 View the current humidity level.</li>
        <li>🌬️ Monitor the wind speed.</li>
        <li>📊 Check the atmospheric pressure.</li>
        <li>📱 Fully responsive design for desktop, tablet, and mobile devices.</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        We value your feedback and suggestions. If you have any questions,
        encounter an issue, or would like to share your ideas, you can visit
        the <strong>Contact</strong> page and send us a message using the
        contact form. We appreciate your feedback and will do our best to
        respond as soon as possible.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make weather information accessible, accurate, and
        easy to understand for everyone. Whether you're planning a trip,
        checking the weather before going outside, or simply staying informed,
        this Weather App provides the essential weather details you need in
        just a few clicks.
      </p>
    </div>
  );
};

export default About;