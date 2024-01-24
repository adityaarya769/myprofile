import React from 'react';
import './Profile.css'; // Assuming you will extract CSS

const Profile = () => {
  return (
    <div>
      <header>
        <h1>Aditya Arya</h1>
        <p>Chatbot Engineer & Software Developer</p>
      </header>

  <div class="container">
    <img src="AdityaAryaImage.jpg" alt="Aditya Arya" class="profile-image"></img>

    <div class="summary section">
      <h2>Summary</h2>
      <p>Chatbot engineer with expertise in Dialogflow CX/ES, Node.js, and Python. Skilled in developing chat and telephony flows, integrating chatbots with various platforms, and conducting workshops on Dialogflow.</p>
    </div>

    <div class="contact-details section">
      <h2>Contact Details</h2>
      <p>Email: <a href="mailto:im.aadityaarya@gmail.com">im.aadityaarya@gmail.com</a></p>
      <p>Phone: 7692041073</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/imaadityaarya" target="_blank" rel="noreferrer">imaadityaarya</a></p>
      <p>Resume: <a href="AdityaAryaResume.pdf" download>Download Resume</a></p>
    </div>

    <div class="certifications section">
      <h2>Certifications</h2>
      <h4><a href="https://www.credential.net/7b5c2848-0bf1-4f07-ae40-6df09d4616fb" target="_blank" rel="noreferrer">Google Cloud Certified Associate Cloud Engineer</a></h4>
      <p>Qualified to deploy applications, monitor operations, and manage solutions on Google Cloud. Capabilities include setting up cloud environments, planning and configuring solutions, and ensuring operational success.</p>
    </div>

    <div class="skills section">
      <h2>Skills</h2>
      <ul>
        <li>Data Structures, Database Management System, Algorithm Design</li>
        <li>Object-Oriented Programming, System Design, Google CCAI</li>
        <li>Python, JavaScript, C++, HTML, CSS, TypeScript</li>
        <li>Django, NodeJS, ReactJS</li>
        <li>MySQL, Firebase, Oracle SQL, Redis</li>
        <li>Postman, Dialogflow ES/CX, Diagrams.net</li>
        <li>GIT, GitHub, GitLab</li>
        <li>Windows, Unix Operating Systems</li>
      </ul>
    </div>
  </div>

  <df-messenger
    project-id="scrapi-development"
    agent-id="4f45ddf0-ccc3-4e1a-bc4b-733a22c79c1d"
    language-code="en-us"
    max-query-length="-1">
    <df-messenger-chat-bubble
     chat-title="myProfile">
    </df-messenger-chat-bubble>
  </df-messenger>
  <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>

  <footer>
    &copy; 2024 Aditya Arya
  </footer>
    </div>
  );
};

export default Profile;
