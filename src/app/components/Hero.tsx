// components/Hero.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MyPhoto from "@/app/images/Khalid.png"
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaFacebookMessenger,
  FaSnapchat,
  FaDiscord,
  FaSkype,
  FaInstagram,
} from 'react-icons/fa';
const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto text-center">
        {/* For desktop (lg: large) screens */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center my-0">
              <Image
                src={MyPhoto}
                alt='My Photo'
                width={250}
                height={250}
                className='rounded-full'
              />
              <p className="text-lg mt-2">
                Expert in Frontend (TypeScript, React.js, HTML, CSS, Tailwind CSS) and Backend (Node.js).
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:text-left pl-4">
            <h1 className="text-4xl font-extrabold mb-4">
              Hi, I'm Khalid Nawaz.
            </h1>
            <p className="text-lg mb-8">
              A passionate Software Engineer and Data Science enthusiast,
              specializing in building elegant and performant applications.
            </p>
            <p className="text-lg mb-8">
              Expert in TypeScript, HTML, CSS, Node.js, React.js, and Tailwind CSS
              for frontend development. Proficient in Python, Pandas, NumPy, and
              utilizing AI for backend and data science.
            </p>
            {/* Add two buttons for actions */}
            <div className="flex justify-center">
              <Link href={'/portfolio'}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
              View Portfolio
              </button>
              </Link>
              <Link href={'/contact'}>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Contact Me
              </button>
              </Link>
             </div>
             <div className="flex mt-6 mb-2 space-x-2 justify-around">
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-4xl text-white hover:text-blue-700" />
            </Link>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl text-wite hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebookMessenger className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaSnapchat className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaSkype className="text-4xl text-white hover:text-blue-700" />
            </a>
            {/* Add more social media icons as needed */}
          </div>
          </div>
        </div>
        {/* For laptop (md: medium) screens and below */}
        <div className="lg:hidden">
          <div className="mb-4">
            <h1 className="text-4xl font-extrabold mb-4">
              Hi, I'm Khalid Nawaz.
            </h1>
            <p className="text-lg mb-8">
              A passionate Software Engineer and Data Science enthusiast,
              specializing in building elegant and performant applications.
            </p>
            <p className="text-lg mb-8">
              Expert in TypeScript, HTML, CSS, Node.js, React.js, and Tailwind CSS
              for frontend development. Proficient in Python, Pandas, NumPy, and
              utilizing AI for backend and data science.
            </p>
            {/* Add two buttons for actions */}
            <div className="flex mt-2 mb-2 space-x-2 justify-around">
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-4xl text-white hover:text-blue-700" />
            </Link>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl text-wite hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebookMessenger className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaSnapchat className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-4xl text-white hover:text-blue-700" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaSkype className="text-4xl text-white hover:text-blue-700" />
            </a>
            {/* Add more social media icons as needed */}
          </div>
          </div>
          
          <div className="flex flex-col items-center my-4">
            <Image
              src={MyPhoto}
              title='Khalid Nawaz'
              alt='Khalid Nawaz Photo'
              width={300}
              height={300}
              className='rounded-full'
            />
            <p className="text-lg mt-2">
              Expert in Frontend (TypeScript, React.js, HTML, CSS, Tailwind CSS) and Backend (Node.js).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
