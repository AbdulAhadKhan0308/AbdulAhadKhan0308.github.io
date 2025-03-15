import * as React from "react";
import swal from 'sweetalert';

export const Projects: React.FC = () => {
  const handleWipProjectClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    swal?.(
      "This project is in progress!",
      "This project is still being worked on and a link to it would soon be available. In the meantime, do check out some of my other projects.",
      "info"
    );
  };

  return (
    <>
      <div
        id="projects"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-900 text-gray-50"
      >
        <div className="sm:w-12/12 md:w-12/12 col-centered">
          <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
            Projects
          </div>
          <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
            Here's a list of some projects I've worked on, please take a moment
            to check them out!
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-5 p-4">
              <a
                href="https://github.com/TheAlgorithms/JavaScript/pull/1137"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly select-none shadow hover:shadow-xl rounded-lg bg-green-400 hover:bg-green-500 p-10 text-2xl md:text-4xl text-gray-900">
                  <div className="font-extrabold text-gray-900">
                    <img
                      src="img/github.svg"
                      className="inline-block rounded-lg mr-3 shadow h-16 w-16 -mt-2"
                    />
                    Bit Count in JS
                  </div>
                  <div className="font-extrabold text-lg md:text-2xl mt-2">
                    Identified and resolved a bug in the bit counting algorithm
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-7 p-4">
              <a
                href="https://github.com/AbdulAhadKhan0308/Digital-Medical-Service"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly select-none rounded-lg shadow hover:shadow-xl bg-green-400 hover:bg-green-500 p-10 text-gray-900 text-2xl md:text-4xl">
                  <div className="font-extrabold text-gray-900">
                    <img
                      src="img/github.svg"
                      className="inline-block rounded-lg mr-3 shadow h-16 w-16 -mt-2"
                    />
                    Digital Medical Service
                  </div>
                  <div className="font-extrabold text-lg md:text-2xl mt-2">
                    A web application offering consultations, appointments and
                    medicine lookup digitally
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-1 text-left p-4 w-full">
            <a
              href="https://drive.google.com/file/d/1DeEj6oooU5hPC_C1SHH6d1baDj-4kcA4/view"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  Hybrid Autosuggestion In Bing
                </div>
                <div className="absolute top-3 right-3 text-md font-extrabold p-1 bg-black text-green-500 flex items-center">
                  <img
                    src="img/microsoft.ico"
                    className="inline-block mr-3 shadow h-4 w-4"
                  />
                  <span>Intern Project</span>
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  Built a search suggestion framework that pulls data from both
                  service calls and local caches, ranks and displays
                  suggestions.
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left w-full p-4">
            <a
              href="https://github.com/AbdulAhadKhan0308/GeolocationTaskMemo/tree/react-app-geolocation"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  Tasks Memo with Geolocation
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  A compact frontend application that enables you to track the
                  timing and locations of your tasks.
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left w-full p-4">
            <a
              href="https://github.com/AbdulAhadKhan0308/TamperProofDocumentStorage"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  Tamperproof Document Storage
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  Using IPFS and Ethereum Blockchain technologies for
                  tamperproof storage
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left w-full p-4">
            <a
              href="https://github.com/AbdulAhadKhan0308/Inventory-Application"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  Inventory Management Application
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  A desktop application designed to manage inventory, generate
                  charts, and issue alerts when supplies run low.
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left p-4 w-full">
            <a
              href="https://github.com/AbdulAhadKhan0308/MP3-Player"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  MP3 Player
                </div>
                <div className="font-bold mt-2 italic text-2xl md:text-3xl text-white">
                  An MP3 Player written in Java
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left p-4 w-full">
            <a
              href="#"
              target="_blank"
              className="kill-link-style"
              onClick={handleWipProjectClick}
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  Mocking WebSocket protocol in playwright end-to-end testing
                  tool
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  Adding WebSocket protocol mocking support to playwright
                  framework for end-to-end testing
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
