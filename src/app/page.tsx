import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Gallery from "../../components/Gallery";
import Speakers from "../../components/Speakers";
import Timeline from "../../components/Timeline";
import Prizes from "../../components/Prizes";
import Sponsors from "../../components/Sponsors";
import Footer from "../../components/Footer";
import ScrollToTopButton from '../../components/ScrollToTopButton';
// import { useRouter } from 'next/navigation'

const Home: NextPage = () => {
  // const router = useRouter();
  return (
    <div
      className="[background:radial-gradient(150%_150%_at_50%_10%,#000_40%,#4B0082_100%)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden 
   sm:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#01cdfa]"
    >
      <Head>
      <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@700&display=swap"
          rel="stylesheet"
        />
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

      {/* Speakers */}
      <section id="speakers">
        <Speakers />
      </section>

      {/* Timeline */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* Sponsors */}
      <section id="sponsors">
        <Sponsors />
      </section>

      {/* Prizes */}
      <section id="prizes">
        <Prizes />
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery />
      </section>

      <ScrollToTopButton />

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
