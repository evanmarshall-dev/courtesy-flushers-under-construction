import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <section>
      <Image
        src="/logo.svg"
        height={500}
        width={500}
        alt="Courtesy Flushers logo"
      />
      <h1 className="text-3xl font-extrabold mb-1">
        Welcome to <span className="text-brand-primary">Courtesy Flushers</span>
        !
      </h1>
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
        Our Business is Literally your Business
      </h2>
      <p className="text-lg text-gray-100 mb-3">
        We are excited for you to see what we have in the works. A new online
        experience will be coming soon. Please keep an eye on our social media
        to be the first to know when we go live. Also, there is some great
        content on there already 😉
      </p>
      <a
        href="https://facebook.com/courtesyflushers"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-blue-700 bg-blue-100 rounded-full mb-7 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
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
    </section>
  );
}
