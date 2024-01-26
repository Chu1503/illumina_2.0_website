import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery ";

const Home: NextPage = () => {
  return (
  <div>
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

    {/* Timeline */}

    {/* Prizes */}

    {/* Sponsors */}

    {/* Footer */}
    
  </div>
  )
};

export default Home;
