import * as React from "react";
import {
  toggleContactMe,
  iterateClickCount,
  projectInProgress,
  toggleNavOnScroll,
} from "./utilityFuncs";

export const App: React.FC = () => {
  const handleNoopClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  const handleContactMe = () => {
    let currentURL = window.location.href;
    currentURL = currentURL.split("#")[1];
    console.log("currentURL", currentURL);
    if (currentURL == "contact") {
      toggleContactMe("show");
    }
  };
  const handleScroll = () => toggleNavOnScroll();
  React.useEffect(() => {
    window.onload = () => handleContactMe();
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="nav-on-scroll"
        style={{
          background: "rgba(53, 211, 153, 0.975)",
        }}
        className="fixed hidden md:block lg:block duration-300 ease nav-top-hidden shadow left-0 w-full p-4 text-gray-900 z-40"
      >
        <div className="w-12/12 sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
          <a href="#top" className="kill-link-style xl:mr-6">
            <span className="inline-block animate__animated animate__fadeInDown rounded-md border-4 border-gray-900 text-gray-900 select-none p-2 inline-block text-2xl rxl:text-3xl font-extrabold">
              AK
            </span>
          </a>
          <a
            href="#about"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
          >
            About
          </a>
          <a
            href="#projects"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
          >
            Projects
          </a>
          <a
            href="#links"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
          >
            Links
          </a>
          <span
            onClick={() => toggleContactMe("show")}
            className="inline-block animate__animated animate__flipInX delay4 ml-6 mr-3 duration-300 float-right text-2xl xl:text-3xl cursor-pointer border-4 rounded-md px-4 p-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 font-extrabold"
          >
            Contact Me
          </span>
        </div>
      </nav>
      <div
        id="contact-me-pane"
        style={{
          left: 0,
          right: 0,
          overflowY: "auto", //'!important' not needed as react applies styles inline so already highest priority
          marginLeft: "auto",
          marginRight: "auto",
          maxHeight: "83%",
        }}
        className="fixed duration-500 ease-in-out border-4 text-center border-green-400 border-b-0 p-6 md:p-12 ease contact-me-inactive rounded-t-xl bg-gray-900 text-gray-50 shadow-xl left-0 z-30 w-11/12 auto"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.620"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="text-2xl no-select md:text-3xl lg:text-5xl font-extrabold">
          Contact Me
        </div>
        <div className="absolute right-6 top-4 md:right-16 md:top-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => toggleContactMe("hide")}
            className="cursor-pointer h-14 w-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.420"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="mt-10 text-left">
          <div className="text-gray-50 text-xl md:text-2xl font-extrabold">
            Your Name
          </div>
          <form action="https://formspree.io/f/mvolpedn" method="POST">
            <input
              type="text"
              required
              name="name"
              className="w-full mt-2 p-4 rounded-md font-bold text-gray-900 shadow text-xl md:text-2xl"
              placeholder="Enter name"
            />

            <div className="text-gray-50 text-xl mt-4 md:text-2xl font-extrabold">
              Your Email
            </div>
            <input
              type="email"
              required
              name="email"
              className="w-full mt-2 p-4 rounded-md shadow text-xl text-gray-900 font-bold md:text-2xl"
              placeholder="Enter email"
            />

            <div className="text-gray-50 text-xl mt-4 md:text-2xl font-extrabold">
              Your Message
            </div>
            <textarea
              required
              name="message"
              className="w-full mt-2 p-4 custom-textarea rounded-md shadow text-gray-900 font-bold text-xl md:text-2xl"
              placeholder="Enter email"
            ></textarea>

            <button
              type="submit"
              className="no-select px-4 p-2 text-xl mt-5 md:text-2xl lg:text-3xl border-4 border-gray-50 inline-block rounded-md cursor-pointer duration-200 hover:bg-gray-50 hover:text-gray-900 font-extrabold"
            >
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 -mt-1 ml-1 inline-block w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  className="inline-block"
                  strokeLinejoin="round"
                  strokeWidth="3.420"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="h-6 fixed z-50 md:relative block w-full z-50 bg-green-400"></div>

      <div className="xl:p-20 pt-10 xl:pb-22">
        <div className="w-12/12 sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
          <span className="hidden md:block lg:block">
            <a href="#top" className="kill-link-style">
              <span className="inline-block rounded-md animate__animated xl:mr-6 animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 inline-block text-2xl xl:text-3xl font-extrabold">
                AK
              </span>
            </a>

            <a
              href="#about"
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              About
            </a>
            <a
              href="#projects"
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay2 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Projects
            </a>
            <a
              href="#links"
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay3 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Links
            </a>
            <span
              onClick={() => toggleContactMe("show")}
              className="inline-block animate__animated animate__flipInX delay4 ml-6 mr-3 duration-300 float-right text-2xl xl:text-3xl cursor-pointer border-4 px-2 xl:px-4 p-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 rounded-md font-extrabold"
            >
              Contact Me
            </span>
          </span>

          <span className="block md:hidden lg:hidden">
            <a href="#top" className="kill-link-style">
              <span className="inline-block hidden w-full text-center animate__animated animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 inline-block text-2xl xl:text-3xl font-extrabold">
                AK
              </span>
            </a>
          </span>
          <div className="mt-20">
            <div className="w-full text-center">
              <img
                id="zach-image"
                style={{ borderRadius: "100%" }}
                onClick={() => iterateClickCount()}
                src="img/abd.svg"
                alt="Photo of Abdul Ahad Khan"
                className="cursor-pointer xl:mt-10 inline-block animate__animated animate__fadeIn delay2 border-gray-900 duration-300 ease hover:border-green-400 shadow-md border-8 h-80 w-80 md:w-96 md:h-96 inline-block"
              />
            </div>

            <div className="animate__animated animate__fadeInUp p-14 delay2 mt-10 xl:mt-14 text-3xl lg:text-5xl font-extrabold text-gray-900">
              Hello, my name is
              <span className="text-green-500"> Abdul Ahad Khan. </span>{" "}
              Discover more about me and delve into my projects!
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-50 text-gray-900"
      >
        <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
          About
        </div>
        <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
          Here you'll find details about my educational background and work
          experience. You can also download my
          <a
            href="https://drive.google.com/file/d/1Af4SBWUwkF1w63W4QLxcJdSI8ps41sNx/view"
            target="_blank"
            className="text-green-500"
          >
            <span className="text-green-500"> resume </span>
          </a>
          .
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 flex flex-col p-4">
            <a
              href="#"
              target="_blank"
              className="kill-link-style"
              onClick={handleNoopClick}
            >
              <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow h-100 hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                <div className="font-extrabold inherit text-3xl md:text-4xl flex items-center">
                  <img
                    src="img/microsoft.ico"
                    alt="Microsoft"
                    className="mr-3 shadow h-8 w-8"
                  />
                  Microsoft
                </div>
                <div className="text-white mt-2 font-bold text-xl">
                  July, 2023 - present
                </div>
                <div className="text-white font-bold italic mt-2 text-2xl">
                  Software Engineer (SWE)
                </div>
              </div>
            </a>
          </div>

          <div className="col-span-12 p-4">
            <a
              href="#"
              target="_blank"
              className="kill-link-style"
              onClick={handleNoopClick}
            >
              <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow h-100 hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                <div className="font-extrabold inherit text-3xl md:text-4xl flex items-center">
                  <img
                    src="img/microsoft.ico"
                    alt="Microsoft"
                    className="mr-3 shadow h-8 w-8"
                  />
                  Microsoft
                </div>
                <div className="text-white mt-2 font-bold text-xl">
                  May, 2022 - July, 2022
                </div>
                <div className="text-white font-bold italic mt-2 text-2xl">
                  Software Engineer Intern
                </div>
              </div>
            </a>
          </div>

          <div className="col-span-12 p-4">
            <a
              href="#"
              target="_blank"
              className="kill-link-style"
              onClick={handleNoopClick}
            >
              <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow h-100 hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                <div className="font-extrabold inherit text-3xl md:text-4xl flex items-center">
                  <img
                    src="img/microsoft.ico"
                    alt="Microsoft"
                    className="mr-3 shadow h-8 w-8"
                  />
                  Microsoft
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-white mt-2 font-bold text-xl">
                    May, 2022 - July, 2022
                  </div>
                  <div className="text-white mt-2 font-bold text-xl">
                    Redmond, WA, USA
                  </div>
                </div>
                <div className="text-white font-bold italic mt-2 text-2xl">
                  Software Engineer Intern
                </div>
                <div className="text-white font-bold italic mt-2 text-2xl">
                  Focused on developing and optimizing features for Microsoft
                  365, enhancing user experience and system security.
                </div>
              </div>
            </a>
          </div>

          <div className="col-span-12 p-4">
            <a
              href="#"
              target="_blank"
              className="kill-link-style"
              onClick={handleNoopClick}
            >
              <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                <div className="font-extrabold inherit text-3xl md:text-4xl flex items-center">
                  <img
                    src="img/mnnit.png"
                    alt="MNNIT"
                    className="mr-3 shadow h-10.8 w-8"
                  />
                  Motilal Nehru National Institute Of Technology, Allahabad
                </div>
                <div className="text-white mt-2 font-bold text-xl">
                  Aug, 2019 - June, 2023
                </div>
                <div className="text-white font-bold italic mt-2 text-2xl">
                  Information Technology
                </div>
              </div>
            </a>
          </div>

          <div className="col-span-12 flex flex-col p-4">
            <a
              href="#"
              target="_blank"
              className="kill-link-style"
              onClick={handleNoopClick}
            >
              <div className="move-up-slightly p-6 md:p-10 rounded-lg h-100 shadow hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                <div className="font-extrabold inherit text-3xl md:text-4xl flex items-center">
                  <img
                    src="img/ahps.png"
                    alt="MNNIT"
                    className="mr-3 shadow h-8 w-8"
                  />
                  Academic Heights Public School
                </div>
                <div className="text-white mt-2 font-bold text-xl">
                  Feb, 2017 - April, 2019
                </div>
                <div className="text-white font-bold italic mt-2 text-2xl">
                  Physics, Chemistry And Maths Stream
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

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
              onClick={(e) => {
                e.preventDefault();
                projectInProgress();
              }}
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

      <div
        id="links"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-50 text-gray-900"
      >
        <div className="sm:w-12/12 md:w-12/12 col-centered">
          <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
            My Links
          </div>
          <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
            Explore the links below to learn more about my coding skills and
            professional work.
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://codeforces.com/profile/AbdulAhadKhan"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/codeforces.png"
                      alt="Codeforces Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Codeforces
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      <span style={{ color: "#0000ff" }}>Expert </span>rated on
                      Codeforces
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://leetcode.com/u/AbdulAhadKhan030801/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/leetcode.ico"
                      alt="Leetcode Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Leetcode
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      2000+ Leetcode rating
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.codechef.com/users/abdul030801"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/codechef.ico"
                      alt="Codechef Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Codechef
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      5 ⭐ rated on Codechef
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.hackerearth.com/@AbdulAhadKhan"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/hackerearth.png"
                      alt="Hackerearth Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Hackerearth
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      1900+ Contest Rating
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://atcoder.jp/users/AbdulAhadKhan"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/atcoder.png"
                      alt="Atcoder Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Atcoder
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      1000+ rating
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.hackerrank.com/profile/aahad6674"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/hackerrank.png"
                      alt="Hackerrank Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Hackerrank
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      5 ⭐ Java and SQL Badges
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://github.com/AbdulAhadKhan0308/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/github.svg"
                      alt="Github Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Github Profile
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Checkout my projects
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://my.newtonschool.co/user/aahad6674"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/newtoncoding.ico"
                      alt="Newton Coding Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Newton Coding
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      2100+ Contest Rating
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
