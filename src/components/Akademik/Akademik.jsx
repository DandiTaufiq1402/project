// AcademicGuide.jsx
import React from 'react';
import './Akademik.css';

const Akademik = () => {
  return (
    <div className="academic-guide">
      <h1>Global Institute Academic Guide</h1>
      
      <section className="introduction">
        <h2>Introduction</h2>
        <p>Welcome to the Global Institute Academic Guide. Here you will find comprehensive information on our curriculum, academic policies, and support services to help you succeed in your studies.</p>
      </section>
      
      <section className="curriculum">
        <div className="curriculum-content">
        <h2>Curriculum</h2>
          <h3>Overview</h3>
          <p>The curriculum at Global Institute is designed to provide a robust educational foundation and prepare students for successful careers in their respective fields. Our courses are structured to offer both theoretical knowledge and practical experience.</p>
          
          <h3>Programs of Study</h3>
          
            <li><strong>Information Technology:</strong> Courses in programming, systems analysis, network security, and more.</li>
            <li><strong>Information Systems:</strong> Courses in database management, business intelligence, systems development, and more.</li>
            <li><strong>Film, Television, and Media Studies:</strong> Courses in media production, film theory, screenwriting, and more.</li>
          
          
          <h3>Course Structure</h3>
          <p>Each program is divided into core courses, electives, and capstone projects. Core courses provide essential knowledge and skills, electives allow for specialization, and capstone projects integrate learning through practical application.</p>
        </div>
      </section>
      
      <section className="academic-policies">
        <h2>Academic Policies</h2>
        <p>Our academic policies are designed to maintain high standards of education and ensure fairness. These policies cover areas such as attendance, grading, academic integrity, and more.</p>
      </section>
      
      <section className="support-services">
        <h2>Support Services</h2>
        <p>Global Institute offers a range of support services to assist students in their academic journey, including counseling, tutoring, career services, and more.</p>
      </section>
      
      <a href="Akademik/Global.pdf" download>
        <button>Unduh PDF</button>
      </a>

      <footer className="footer">
        <p>&copy; 2024 Global Institute. All rights reserved.</p>
      </footer>
    </div>
    
      

  );
};

export default Akademik;
