import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full p-4 text-white bg-blue-500">
      <span className="flex flex-col md:flex-row">
        <span className="mx-1">© {new Date().getFullYear()}</span>
        <span className="mx-1">All rights reserved.</span>
      </span>
      <span className="flex flex-col md:flex-row">
        <span className="mx-1">Design by: </span>
        <a
          href="https://www.jcc-dev.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline hover:text-blue-200"
        >
          Jordan Cruz-Correa
        </a>
      </span>
    </footer>
  );
}
