import Navbar from "./components/layout/navbar";
import GrainOverlay from "./components/layout/GrainOverlay";
import Footer from "./components/layout/footer";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Services from "./components/sections/services";
import PortfolioSection from "./components/sections/portfolio_grid";
import Process from "./components/sections/process";
import Stats from "./components/sections/stats";
import Testimonials from "./components/sections/testimonials";
import Contact from "./components/sections/contact";

export default function Page() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <PortfolioSection />
        <Process />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
