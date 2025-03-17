import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center w-full">
      <a
        href="tel:+19026916616"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 bg-white border rounded-lg hover:text-gray-100 hover:bg-brand-primary focus:ring-4 focus:ring-gray-400 mr-0 md:mr-4 mb-4 w-full md:w-auto"
      >
        Call us @ 902-691-6616{" "}
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
        href="mailto:ian@courtesyflushers.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-4 w-full md:w-auto"
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
    </footer>
  );
}
