// components/Contact.tsx
import React from 'react';
import ContactImage from "@/app/images/contact_image.jpg"
import Image from 'next/image';
import Link from 'next/link';
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

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
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
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="w-2/5 pr-10">
          <h2 className="text-3xl font-extrabold mb-4">Get in touch</h2>
          <p className="text-lg mb-8">Let's work together!</p>
          <Image
            src={ContactImage}
            alt="Contact Image"
            className="rounded-md"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Right Section */}
        <div className="w-3/5 bg-gray-100 p-8 rounded-md">
          <h3 className="text-gray-600 text-2xl font-semibold mb-4">Contact Me</h3>

          {/* Contact Form */}
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Send Message
            </button>
          </form>
          {/* Social Media Icons */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
