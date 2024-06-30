import * as React from "react";

export const About: React.FC = () => {
  const handleNoopClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
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
    </>
  );
};
