// components/Portfolio.tsx
import React from 'react';
const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel fermentum justo.',
      imageUrl: '/images/project1.jpg', // Replace with the actual image path
      projectUrl: '#', // Replace with the actual project URL
    },
    {
      title: 'Project 2',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      imageUrl: '/images/project2.jpg', // Replace with the actual image path
      projectUrl: '#', // Replace with the actual project URL
    },
    {
      title: 'Project 3',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      imageUrl: '/images/project3.jpg', // Replace with the actual image path
      projectUrl: '#', // Replace with the actual project URL
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold mb-8">My Portfolio</h2>
        <p className="text-lg mb-8">
          <span className='font-bold'>Welcome to my portfolio!</span> <br/> Here, you can explore some of the exciting projects I've had the pleasure of working on. Each project showcases my skills and expertise in delivering high-quality and innovative solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="mb-4 rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
