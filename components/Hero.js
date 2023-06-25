import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
        <Image
          src="/logo.svg"
          height={500}
          width={500}
          alt="Courtesy Flushers Logo"
        />
        <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome to{" "}
          <span className="text-brand-primary">Courtesy Flushers</span>!
        </h1>
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Our Business is Literally your Business
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-500">
          We are excited for you to see what we have in the works. A new online
          experience will be coming soon. Please keep an eye on our social media
          to be the first to know when we go live. Also, there is some great
          content on there already 😉
        </p>
        <a
          target="_blank"
          href="https://facebook.com/courtesyflushers"
          className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-blue-700 bg-blue-100 rounded-full mb-7 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          rel="noreferrer"
        >
          <span className="text-xs bg-facebook-brand rounded-full text-white px-4 py-1.5 mr-3">
            Socials
          </span>{" "}
          <span className="text-sm font-medium">
            Follow us on Facebook to see what&apos;s new!
          </span>
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            target="_blank"
            href="tel:+19025389161"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 bg-white border rounded-lg hover:text-gray-100 hover:bg-gray-900 focus:ring-4 focus:ring-gray-400"
            rel="noreferrer"
          >
            Call us @ 902-538-9161
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 19 18"
            >
              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="mailto:ian@courtesyflushers.ca"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            rel="noreferrer"
          >
            Send us an Email
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-r from-slate-500 to-slate-300bg-gradient-to-r to-slate-300"></div>
    </section>
  );
};

export default Hero;
