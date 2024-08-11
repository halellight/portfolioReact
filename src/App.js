import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import ZoomParallax from "./components/ZoomParallax";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import Wyfim from "./components/Wyfim";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import Main from "./components/Main";
import { AnimatePresence } from "framer-motion";
import Ttm from "./components/Ttm";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // return () => {
    //   // Cleanup Lenis on component unmount
    //   lenis.destroy();
    // };
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          <Main />
          <Landing />
          <Projects />
          <Wyfim />
          <ZoomParallax />
          <Ttm />
          <Contact />
          <Footer />
          <SpeedInsights />
        </>
      )}
    </div>
  );
}

export default App;
