import React from 'react';

const Technologies = () => {
  return (
    <section className="bg-white text-gray-800 py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold mb-8">Technologies I Work On</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((technology, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-4">{technology.name}</h3>
              <p className="text-sm mb-4">{technology.description}</p>
              <a
                href={technology.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Official Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const technologies = [
  {
    name: 'HTML',
    description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications.',
    website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    description: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of a document written in HTML.',
    website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, interpreted programming language that enables interactive web pages and dynamic content.',
    website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    description: 'TypeScript is a superset of JavaScript that adds static typing and other features to enhance development productivity and code quality.',
    website: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Visual Studio Code',
    description: 'Visual Studio Code is a lightweight, powerful code editor developed by Microsoft for Windows, macOS, and Linux.',
    website: 'https://code.visualstudio.com/',
  },
  {
    name: 'Node.js',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, enabling server-side JavaScript development.',
    website: 'https://nodejs.org/en'
  },
  {
    name: 'React',
    description: 'React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It facilitates the creation of reusable UI components.',
    website: "https://react.dev/"
  },
  {
    name: 'Next.js',
    description: 'Next.js is a React framework that enables server-side rendering, automatic code splitting, and other powerful features for React applications.',
    website: "https://nextjs.org/"
  },
  {
    name: 'Tailwind CSS',
    description: 'Tailwind CSS is a utility-first CSS framework that makes it easy to design responsive and visually appealing user interfaces.',
    website: "https://tailwindcss.com/"
  },
  {
    name: 'Angular',
    description: 'Angular is a TypeScript-based open-source framework for building web applications. It is developed and maintained by Google.',
    website: "https://angular.io/"
  },
  {
    name: 'Python',
    description: 'Python is a versatile and powerful programming language known for its simplicity and readability. It is widely used for web development, data analysis, and more.',
    website: "https://www.python.org/"
  },
  {
    name: 'Bootstrap',
    description: 'Bootstrap is a popular CSS framework that simplifies the process of designing responsive and visually consistent web pages.',
    website: "https://getbootstrap.com/"
  },
];

export default Technologies;
