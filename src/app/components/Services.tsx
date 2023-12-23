// components/Services.tsx
import React from 'react';
import Image from 'next/image';
import FrontendImage from "@/app/images/frontend_image.jpg";
import BackendImage from "@/app/images/backend_image.jpg";
import Main from "@/app/images/who-Im-I.png"

const Services = () => {
  return (
    <section className="bg-gray-700 text-white lg:py-16 py-4 justify-center text-center">
      <div className="container lg:mx-auto lg:flex lg:items-center lg:justify-between">
        {/* Left Section */}
        <div className="lg:w-2/3 lg:pl-4">
          <h2 className="lg:text-3xl text-xl font-bold lg:font-extrabold mb-4 text-center">Technologies I Work On</h2>
          <p className="text-lg mb-8">
            <span className="text-blue-500 font-semibold">What I Do?</span> I specialize in frontend development using technologies like TypeScript, React.js, HTML, CSS, and Tailwind CSS. I design and implement user interfaces that are not only visually appealing but also highly functional and responsive.
          </p>
          <Image
              src={Main}
              alt="Frontend Development"
              width={1000}
              height={1000}
              className="rounded-md"
            />
          {/* Add more content or modify the paragraph based on your services */}
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3">
          {/* First Small Section: Frontend Development */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-center">Frontend Development</h3>
            <Image
              src={FrontendImage}
              alt="Frontend Development"
              width={300}
              height={100}
              className="rounded-md"
            />
            <p className="text-sm mt-2 text-center ">
              I create modern and responsive user interfaces using the latest frontend technologies. From designing wireframes to implementing complex features, I ensure a seamless user experience.
            </p>
          </div>

          {/* Second Small Section: Backend Development */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <Image
              src={BackendImage}
              alt="Backend Development"
              width={300}
              height={200}
              className="rounded-md"
            />
            <p className="text-sm mt-2">
              I build robust and scalable backend systems using Node.js. From database design to API development, I focus on creating efficient and secure server-side solutions for various applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
