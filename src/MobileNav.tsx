import * as React from "react";
import { MobileNavProps } from "./types";

export const MobileNav: React.FC<MobileNavProps> = ({
  navVisible,
  contactMeVisible,
  setContactMeVisible,
}) => {
  const createHandleToggle = (state: boolean) => (_e: React.SyntheticEvent) =>
    setContactMeVisible(state);

  return (
    <>
      {navVisible && (
        <nav
          id="nav-on-scroll"
          style={{
            background: "rgba(53, 211, 153, 0.975)",
          }}
          className="fixed hidden md:block lg:block duration-300 ease shadow top-0 left-0 w-full p-4 text-gray-900 z-40"
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
              onClick={createHandleToggle(true)}
              className="inline-block animate__animated animate__flipInX delay4 ml-6 mr-3 duration-300 float-right text-2xl xl:text-3xl cursor-pointer border-4 rounded-md px-4 p-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 font-extrabold"
            >
              Contact Me
            </span>
          </div>
        </nav>
      )}
      {contactMeVisible && (
        <div
          id="contact-me-pane"
          style={{
            overflowY: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            maxHeight: "83%",
            bottom: 0, // Ensures the pane is always at the bottom of the viewport
            left: 0, // Aligns the pane to the left edge of the viewport
            right: 0, // Aligns the pane to the right edge of the viewport
          }}
          className="fixed z-30 w-11/12 mx-auto border-4 border-green-400 border-b-0 p-6 md:p-12 rounded-t-xl bg-gray-900 text-gray-50 shadow-xl text-center duration-500 ease-in-out"
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
              onClick={createHandleToggle(false)}
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
      )}
    </>
  );
};
