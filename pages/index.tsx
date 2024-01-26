import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery ";
import Speakers from "../components/Speakers";
import Timeline from "../components/Timeline";
import Prizes from "../components/Prizes";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import BG from "../images/BACKGROUND.png";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgba(9,1,25,255)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden 
   sm:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]"
    >
      <Head>
        <title>Illumina 2.0</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Home */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Speakers */}
      <section id="speakers">
        <Speakers />
      </section>

      {/* Timeline */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* Prizes */}
      <section id="prizes">
        <Prizes />
      </section>

      {/* Sponsors */}
      <section id="sponsors">
        <Sponsors />
      </section>

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
