import * as React from "react";
import { toggleNavOnScroll } from "./utilityFuncs";
import { MobileNav } from "./MobileNav";
import { IntroContainer } from "./IntroContainer";
import { About } from "./About";
import { Projects } from "./Projects";
import { Links } from "./Links";

export const App: React.FC = () => {
  const [contactMeVisible, setContactMeVisible] =
    React.useState<boolean>(false);

  const handleContactMe = () => {
    let currentURL = window.location.href;
    currentURL = currentURL.split("#")[1];
    console.log("currentURL", currentURL);
    if (currentURL == "contact") {
      setContactMeVisible(true);
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
      <MobileNav
        contactMeVisible={contactMeVisible}
        setContactMeVisible={setContactMeVisible}
      />
      <div className="h-6 fixed z-50 md:relative block w-full z-50 bg-green-400"></div>
      <IntroContainer setContactMeVisible={setContactMeVisible} />
      <About />
      <Projects />
      <Links />
    </>
  );
};
