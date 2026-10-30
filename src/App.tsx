import { useEffect, useState } from "react";
import { track, type ContactSource } from "./analytics";
import { ContactDialog } from "./components/ContactDialog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./sections/About";
import { Profiles } from "./sections/Profiles";
import { Projects } from "./sections/Projects";

export function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = (source: ContactSource) => {
    setContactOpen(true);
    track("contact-open", { source });
  };

  useEffect(() => {
    if (window.location.hash === "#contact") openContact("link");
  }, []);

  return (
    <>
      <Header onContact={openContact} />
      <main>
        <Hero onContact={openContact} />
        <About />
        <Projects />
        <Profiles />
      </main>
      <Footer />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
