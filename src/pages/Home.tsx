import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import CaseStudyPrompt from "../components/CaseStudyPrompt";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <CaseStudyPrompt />
    </>
  );
}
