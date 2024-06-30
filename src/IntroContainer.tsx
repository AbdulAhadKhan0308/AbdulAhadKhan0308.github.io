import * as React from "react";
import { IntroContainerProps } from "./types";

export const IntroContainer: React.FC<IntroContainerProps> = ({
  setContactMeVisible,
}) => {
  const [imgState, setImgState] = React.useState<boolean>(true);

  const handleImgSrc = (_e: React.SyntheticEvent) => setImgState(!imgState);
  const createHandleToggle = (state: boolean) => (_e: React.SyntheticEvent) =>
    setContactMeVisible(state);

  return (
    <>
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
              onClick={createHandleToggle(true)}
              className="inline-block animate__animated animate__flipInX delay4 ml-6 mr-3 duration-300 float-right text-2xl xl:text-3xl cursor-pointer border-4 px-2 xl:px-4 p-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 rounded-md font-extrabold"
            >
              Contact Me
            </span>
          </span>

          <div className="mt-20">
            <div className="w-full text-center">
              <img
                id="zach-image"
                style={{ borderRadius: "100%" }}
                onClick={handleImgSrc}
                src={imgState ? "img/abd.svg" : "img/abd-dark.svg"}
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
    </>
  );
};
