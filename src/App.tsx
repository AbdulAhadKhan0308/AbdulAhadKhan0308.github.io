import * as React from "react";

export const App: React.FC = () => {
  const noop = (..._arg: any[]) => {
    return () => {
      return;
    };
  };

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
              ZJ
            </span>
          </a>
          <a
            href="#projects"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
          >
            Projects
          </a>
          <a
            href="#extras"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
          >
            Extras
          </a>
          <a
            href="#media"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
          >
            Media
          </a>
          <span
            onClick={noop("toggleContactMe", "show")}
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
          overflowY: "auto", //important not needed as react applies styles inline so already highest priority
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.620"
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
            onClick={noop("toggleContactMe", "hide")}
            className="cursor-pointer h-14 w-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.420"
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
                  stroke-linecap="round"
                  className="inline-block"
                  stroke-linejoin="round"
                  stroke-width="3.420"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <nav className="block bg-white shadow md:hidden">
        <div
          style={{ zIndex: 999 }} // !important not needed
          className="fixed top-10 right-6"
        >
          <svg
            onClick={noop("openMobileNav", "")}
            xmlns="http://www.w3.org/2000/svg"
            className="duration-200 p-1.5 bg-gray-100 hover:bg-gray-200 h-12 w-12 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.620"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </nav>

      <div
        id="mobile-nav"
        style={{ zIndex: 999 }} //important not needed
        className="fixed block md:hidden duration-300 ease bg-gray-100 offscreen-nav offscreen-nav-hidden"
      >
        <div className="absolute top-10 right-4">
          <svg
            onClick={noop("closeMobileNav", "")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.620"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="relative w-12/12 text-center">
          <span
            onClick={noop("scrollToSection", "top")}
            className="inline-block relative top-11 col-center rounded-md animate__animated xl:mr-6 animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 inline-block text-2xl xl:text-3xl font-extrabold"
          >
            ZJ
          </span>
        </div>

        <div className="mt-16 text-center col-centered">
          <div className="text-4xl font-extrabold">
            <span
              onClick={noop("scrollToSection", "projects")}
              className="underline--magical"
            >
              Projects
            </span>
          </div>

          <div className="text-4xl mt-4 font-extrabold">
            <span
              onClick={noop("scrollToSection", "extras")}
              className="underline--magical"
            >
              Extras
            </span>
          </div>

          <div className="text-4xl mt-4 font-extrabold">
            <span
              onClick={noop("scrollToSection", "media")}
              className="underline--magical"
            >
              Media
            </span>
          </div>

          <div className="text-3xl mt-8 relative font-extrabold">
            <span
              onClick={noop("openContact", "")}
              className="border-4 px-4 py-2 border-gray-900 rounded-md"
            >
              Contact Me
            </span>
          </div>
        </div>
      </div>

      <div className="h-6 fixed z-50 md:relative block w-full z-50 bg-green-400"></div>

      <div className="xl:p-20 pt-10 xl:pb-22">
        <div className="w-12/12 sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
          <span className="hidden md:block lg:block">
            <a href="#top" className="kill-link-style">
              <span className="inline-block rounded-md animate__animated xl:mr-6 animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 inline-block text-2xl xl:text-3xl font-extrabold">
                ZJ
              </span>
            </a>

            <a
              href="#projects"
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Projects
            </a>
            <a
              href="#extras"
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay2 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Extras
            </a>
            <a
              href="#media"
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay3 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Media
            </a>
            <span
              onClick={noop("toggleContactMe", "show")}
              className="inline-block animate__animated animate__flipInX delay4 ml-6 mr-3 duration-300 float-right text-2xl xl:text-3xl cursor-pointer border-4 px-2 xl:px-4 p-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 rounded-md font-extrabold"
            >
              Contact Me
            </span>
          </span>

          <span className="block md:hidden lg:hidden">
            <a href="#top" className="kill-link-style">
              <span className="inline-block hidden w-full text-center animate__animated animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 inline-block text-2xl xl:text-3xl font-extrabold">
                ZJ
              </span>
            </a>
          </span>
          <div className="mt-20">
            <div className="w-full text-center">
              <img
                id="zach-image"
                style={{ borderRadius: "100%" }}
                onClick={noop("iterateClickCount", "")}
                src="img/zach.png"
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

      <div className="p-4 md:p-20 bg-gray-900 text-gray-50">
        <div className="sm:w-12/12 animate__animated animate__fadeIn delay2 text-center md:w-12/12 col-centered">
          <div className="text-4xl w-full md:text-5xl lg:text-6xl pt-10 md:pt-0 font-extrabold">
            Featured Work
          </div>
          <div className="grid grid-cols-12 mt-8">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 p-4">
              <a
                href="https://www.animalalliancepledge.org/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly duration-200 shadow-md hover:shadow-xl">
                  <div className="project-picture rounded-t-2xl h-60 w-full animal-demo"></div>
                  <div className="project-description p-4 py-6 text-3xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-green-300 to-green-400 rounded-b-2xl">
                    Animal Alliance Pledge
                    <div className="font-bolder mt-2 text-xl">
                      Helping the Planet by Helping Animals
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 p-4">
              <a
                href="https://www.easy-emdr.com/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly duration-200 shadow-md hover:shadow-xl">
                  <div className="project-picture rounded-t-2xl h-60 w-full easy-emdr-demo"></div>
                  <div className="project-description p-4 py-6 text-3xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-purple-300 to-purple-400 rounded-b-2xl">
                    Easy EMDR
                    <div className="font-bolder mt-2 text-xl">
                      Simplifying Telehealth for EMDR Therapists
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 p-4">
              <a
                href="https://www.fucknestle.art/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly duration-200 shadow-md hover:shadow-xl">
                  <div className="project-picture rounded-t-2xl h-60 w-full fk-nestle-demo"></div>
                  <div className="project-description p-4 py-6 text-3xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-blue-300 to-blue-400 rounded-b-2xl">
                    F*ck Nestlé
                    <div className="font-bolder mt-2 text-xl">
                      Consumer transparency for Nestlé
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-50 text-gray-900"
      >
        <div className="sm:w-12/12 md:w-12/12 col-centered">
          <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
            My Projects
          </div>
          <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
            I love to create things, and I'm always working on something new!
            You can view some of my favorite projects below.
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.boycottbuddy.app/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/boycott-buddy.png"
                      alt="Boycott Buddy Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Boycott Buddy
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Consumer Transparency Resource
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.fucknestle.art/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/finger.png"
                      alt="Fuck Nestle Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      F*ck Nestlé
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      All about Nestlé
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.animalalliancepledge.org/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/logo-aap.png"
                      alt="Animal Alliance Pledge Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Animal Alliance Pledge
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Animal Activism Support
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.collabspot.io/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/collab.jpg"
                      alt="Collab Spot Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Collab Spot
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Collaborative Website Iteration
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.supportbodilyautonomy.com/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/love.png"
                      alt="Bodily Autonomy Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Support Bodily Autonomy
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Reproductive Freedom Resources
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.easy-emdr.com/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/easy-logo.png"
                      alt="Easy EMDR Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Easy EMDR
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Simplifying EMDR Telehealth
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://safesubstance.com/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/corrosive.png"
                      alt="Safe Substance Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Safe Substance
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Interactive Harm Reduction
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="Sea/thesea.html"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/wave.png"
                      alt="Mariana Trench Visualization"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      The Sea
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Exploring the Mariana Trench
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="rich/index.html"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/money.png"
                      alt="Rich Are Really Rich Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Rich Are Really Rich
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Visualizing Extreme Wealth
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://apps.apple.com/us/app/easy-emdr/id1594213288?ign-mpt=uo%3D2"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/easy-logo.png"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Easy EMDR App
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      A modern EMDR app
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.thecureitproject.com/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/cureit.png"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      The Cure It Project
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Streamlined Cancer Education
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.easy-emdr.com/oldtool.html"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/eye.jpg"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-gray-900">
                      Easy EMDR Classic
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Free EMDR BLS
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <span
                onClick={noop("projectRetired", "")}
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/contextualize.png"
                      alt="Contextualize Me Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Contextualize Me
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Effective Altruism Resources
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.schaumburgflyingclub.org/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="absolute top-2 left-2 text-md font-extrabold rounded-lg p-1 bg-gray-900 text-gray-50">
                    Contract Job
                  </div>
                  <div className="w-full text-center">
                    <img
                      src="img/plane.png"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-gray-900">
                      Flying Club
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Website for Aviation Fans
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <span
                onClick={noop("projectRetired", "")}
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="absolute top-2 left-2 text-md font-extrabold rounded-lg p-1 bg-gray-900 text-gray-50">
                    Contract Job
                  </div>
                  <div className="w-full text-center">
                    <img
                      src="img/blood-orange.png"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-gray-900">
                      Blood Orange
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Website for Author
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <span
                onClick={noop("projectRetired", "")}
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="absolute top-2 left-2 text-md font-extrabold rounded-lg p-1 bg-gray-900 text-gray-50">
                    Contract Job
                  </div>
                  <div className="w-full text-center">
                    <img
                      src="img/laptop.png"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-gray-900">
                      Got/It Software
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Website for Startup
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <div className="col-span-12 hidden md:col-span-6 lg:col-span-4 p-4">
              <div
                onClick={noop("showRetiredProjects", "")}
                className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg"
              >
                <div className="w-full text-center">
                  <img
                    src="img/retired-icon.jpeg"
                    className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                  />
                </div>
                <div className="mt-2">
                  <span className="text-3xl font-extrabold text-gray-900">
                    Retired Projects
                  </span>
                  <div className="mt-1 text-gray-900 font-extrabold text-2xl">
                    Some Fun Older Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="extras"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-900 text-gray-50"
      >
        <div className="sm:w-12/12 md:w-12/12 col-centered">
          <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
            Extras
          </div>
          <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
            An incomplete list of some videos and writings that I've made,
            covering a wide variety of topics. Check them out if you like!
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-5 p-4">
              <a
                href="https://www.easy-emdr.com/blog.html"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly select-none shadow hover:shadow-xl rounded-lg bg-green-400 hover:bg-green-500 p-10 text-2xl md:text-4xl text-gray-900">
                  <div className="font-extrabold text-gray-900">
                    <img
                      src="img/easy-logo.png"
                      className="inline-block rounded-lg mr-3 bg-gray-50 shadow h-16 w-16 -mt-2"
                    />
                    Easy EMDR Blog
                  </div>
                  <div className="font-extrabold text-lg md:text-2xl mt-2">
                    Writing about EMDR and mental health.
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-7 p-4">
              <a
                href="https://www.youtube.com/channel/UCGEWlEUCsPWaIkMNwpNROzQ"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly select-none rounded-lg shadow hover:shadow-xl bg-green-400 hover:bg-green-500 p-10 text-gray-900 text-2xl md:text-4xl">
                  <div className="font-extrabold text-gray-900">
                    <img
                      src="img/logo.jpg"
                      className="inline-block rounded-lg mr-3 shadow h-16 w-16 -mt-2"
                    />
                    Youtube Channel
                  </div>
                  <div className="font-extrabold text-lg md:text-2xl mt-2">
                    My disorganized playground of a Youtube channel :)
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-1 text-left w-full p-4">
            <a
              href="https://www.animalalliancepledge.org/john-oberg-profile.html"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  Bringing Animal Advocacy to Millions
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  A profile of an activist who reaches millions with a message
                  for the kinder treatment of animals and our planet.
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left w-full p-4">
            <a
              href="https://www.easy-emdr.com/effective-altruism.html"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  Fighting Global Trauma with Effective Altruism
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  Reflecting on our efforts to fight global trauma with
                  effective altruism.
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left w-full p-4">
            <a
              href="https://www.easy-emdr.com/malaria.html"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  Easy EMDR is Joining the Fight Against Malaria!
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  A blog post about our commitment to donate 10% of all profits
                  to help fight preventable diseases.
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left p-4 w-full">
            <a
              href="https://www.elephantjournal.com/now/the-importance-of-universal-empathy/"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  The Importance of Universal Empathy
                </div>
                <div className="font-bold mt-2 italic text-2xl md:text-3xl text-white">
                  Writing about the psychology behind disregarding others and
                  the importance of recognizing this.
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left p-4 w-full">
            <a
              href="https://www.elephantjournal.com/now/how-climate-change-hurts-the-most-marginalized-among-us/"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  How Climate Change Harms the Most Marginalized Among Us
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  An article about climate change and its impact on already
                  disadvantaged communities.
                </div>
              </div>
            </a>
          </div>

          <div className="mt-1 text-left p-4 w-full">
            <a
              href="https://themacweekly.com/76607/opinion/attend-fossil-free-macs-sit-in/"
              target="_blank"
              className="kill-link-style"
            >
              <div className="cursor-pointer p-6 bg-transparent border-4 border-green-400 w-full h-full duration-200 move-up-slightly rounded-lg ease text-green-400 hover:text-gray-900 hover:bg-green-400 hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  The Importance of Fossil Free Mac's Sit-In
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  Macalester has millions invested in Fossil Fuels — something
                  that students have resisted.
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        id="media"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-50 text-gray-900"
      >
        <div className="sm:w-12/12 md:w-12/12 col-centered">
          <div className="p-4 text-4xl md:text-6xl pt-12 md:pt-0 font-extrabold">
            Media
          </div>
          <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
            I try to create projects that address social problems. Here's some
            media that has been written about projects I've worked on.
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 flex flex-col p-4">
              <a
                href="https://www.startribune.com/macalester-senior-makes-eye-movement-therapy-accessible-and-affordable-with-an-app/573372791/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow h-100 hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                  <div className="font-extrabold inherit text-3xl md:text-4xl">
                    Star Tribune Feature
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-8 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <div className="text-white font-bold italic mt-2 text-2xl">
                    On making eye movement therapy more accessible.
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 flex flex-col md:col-span-6 p-4">
              <a
                href="https://www.daily.co/blog/easy-emdr-transforms-trauma-therapy-delivery-with-daily/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow h-100 hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                  <div className="font-extrabold inherit text-3xl md:text-4xl">
                    Daily.co Feature
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-8 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <div className="text-white font-bold italic mt-2 text-2xl">
                    Easy EMDR transforms trauma therapy delivery with Daily.
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 p-4">
              <a
                href="https://www.macalester.edu/news/2022/09/summer-at-a-startup/?fbclid=IwAR3R8lezNX3b-4tw96iZ8owB-maX64nnD_cjFM24j2nUZ0m772tOGgq7sjA"
                target="_blank"
                className="kill-link-style"
              >
                <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow h-100 hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                  <div className="font-extrabold inherit text-3xl md:text-4xl">
                    Summer at a Startup
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-8 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <div className="text-white font-bold italic mt-2 text-2xl">
                    Adding features for therapists with our talented intern.
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 p-4">
              <a
                href="https://www.bizjournals.com/twincities/inno/stories/inno-insights/2019/09/18/minne-innos-2019-inno-under-25.html"
                target="_blank"
                className="kill-link-style"
              >
                <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                  <div className="font-extrabold inherit text-3xl md:text-4xl">
                    Top Rising Entrepreneur [2019]
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-8 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <div className="text-white font-bold italic mt-2 text-2xl">
                    Recognition for Work on Easy EMDR.
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 flex flex-col md:col-span-6 p-4">
              <a
                href="https://www.bizjournals.com/twincities/inno/stories/inno-events/2020/11/19/minne-inno-presents-its-2020-inno-under-25.html"
                target="_blank"
                className="kill-link-style"
              >
                <div className="move-up-slightly p-6 md:p-10 rounded-lg h-100 shadow hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                  <div className="font-extrabold inherit text-3xl md:text-4xl">
                    Top Rising Entrepreneur [2020]
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-8 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <div className="text-white font-bold italic mt-2 text-2xl">
                    Easy EMDR's Second Year Included!
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 p-4">
              <a
                href="https://storiesatmac.wordpress.com/2019/04/09/hes-helping-mental-health-through-coding-Abdul-jordan/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                  <div className="font-extrabold inherit text-3xl md:text-4xl">
                    Stories at Mac
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-8 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <div className="text-white font-bold italic mt-2 text-2xl">
                    Helping mental health through programming.
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 p-4">
              <a
                href="https://www.macalester.edu/news/2020/08/change-in-plans/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow hover:shadow-xl cursor-pointer hover:bg-green-400 text-green-400 hover:text-gray-900 bg-gray-900 text-gray-50">
                  <div className="font-extrabold inherit text-3xl md:text-4xl">
                    Change in Plans
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-8 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <div className="text-white font-bold italic mt-2 text-2xl">
                    Article Writing about Easy EMDR's Work During COVID-19.
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 text-center block p-4">
        <span className="font-extrabold text-gray-900 text-xl">
          <div className="mt-1">
            © 2023 Abdul Ahad Khan. All Rights Reserved.
          </div>
        </span>
        <span className="font-extrabold text-gray-900 text-xl">
          <div className="mt-1">
            © 2023 Abdul Ahad Khan. All Rights Reserved.
          </div>
        </span>
      </div>
    </>
  );
};
