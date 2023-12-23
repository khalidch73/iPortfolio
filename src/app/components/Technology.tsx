
import React from 'react';
import Image from 'next/image';

// Import your technology logos
import HtmlLogo from '@/app/images/html_logo.png';
import CssLogo from '@/app/images/css_logo.png';
import JavascriptLogo from '@/app/images/javascript_logo.png';
import TypescriptLogo from '@/app/images/typescript_logo.png';
import NodejsLogo from '@/app/images/nodejs_logo.png';
import NextjsLogo from '@/app/images/nextjs_logo.png';
import VSCodeLogo from '@/app/images/vscode_logo.png';
import TailwindCssLogo from '@/app/images/tailwindcss_logo.png';
import ReactJsLogo from '@/app/images/reactjs_logo.png';
import PythonLogo from '@/app/images/python_logo.png';
import PandasLogo from '@/app/images/pandas_logo.png';
import NumpyLogo from '@/app/images/numpy_logo.png';

const TechnologiesStrip = () => {
  const technologies = [
    HtmlLogo,
    CssLogo,
    JavascriptLogo,
    TypescriptLogo,
    NodejsLogo,
    NextjsLogo,
    VSCodeLogo,
    TailwindCssLogo,
    ReactJsLogo,
    PythonLogo,
    PandasLogo,
    NumpyLogo,
    HtmlLogo,
    CssLogo,
    JavascriptLogo,
    TypescriptLogo,
    NodejsLogo,
    NextjsLogo,
    VSCodeLogo,
    TailwindCssLogo,
    ReactJsLogo,
    PythonLogo,
    PandasLogo,
    NumpyLogo,
  ];

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto overflow-auto whitespace-nowrap">
        {technologies.map((logo, index) => (
          <div key={index} className="inline-block p-4">
            <Image
              src={logo}
              alt="Technology Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesStrip;
