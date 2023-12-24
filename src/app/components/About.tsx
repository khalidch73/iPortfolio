'use client'
// components/About.tsx
import React, { useState } from 'react';

const About = () => {
  // State to manage dynamic data
  const [yearsOfExperience, setYearsOfExperience] = useState(0.4);
  const [completedProjects, setCompletedProjects] = useState(1);
  const [currentClients, setCurrentClients] = useState(['Company A', 'Company B', 'Company C']);

  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6">About Me</h2>
        <p className="text-lg mb-8">
          Hi, Im Khalid Nawaz, a passionate Software Engineer and Data Science enthusiast. I specialize in building elegant and performant applications using a variety of technologies.
        </p>
        <p className="text-lg mb-8">
          My expertise lies in Frontend development with technologies like TypeScript, React.js, HTML, CSS, and Tailwind CSS. On the Backend, I'm proficient in Node.js. I also have experience in Python, Pandas, NumPy, and utilizing AI for backend and data science.
        </p>
        <p className="text-lg mb-8">
          Technology is not just a career for me; it's my passion. I love creating innovative solutions, solving complex problems, and staying up-to-date with the latest advancements in the tech world.
        </p>
        <p className="text-lg mb-8">
          Looking ahead, my future plans involve continuous learning, contributing to open-source projects, and exploring emerging technologies. I aim to make a positive impact in the tech community and contribute to the advancement of technology in meaningful ways.
        </p>


        <div className="flex justify-around">
          {/* Box 1: Years of Experience */}
          <div className="bg-blue-200 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
            <p className="text-3xl">{yearsOfExperience}</p>
          </div>

          {/* Box 2: Completed Projects */}
          <div className="bg-green-200 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Completed Projects</h3>
            <p className="text-3xl">{completedProjects}</p>
          </div>

          {/* Box 3: Current Clients */}
          <div className="bg-yellow-200 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Current Clients</h3>
            <ul>
              {currentClients.map((client, index) => (
                <li key={index}>{client}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
