import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: NextPage = () => {
  return (
  <div>
    <Head>
      <title>Illumina 2.0</title>
    </Head>
    
    {/* Navbar */}
    <Navbar />

    {/* Home */}
    <section id="home">
        <Hero />
    </section>

    {/* About */}
    <section id="about">
        <About />
    </section>

    {/* Gallery */}

    {/* Speakers */}

    {/* Timeline */}

    {/* Prizes */}

    {/* Sponsors */}

    {/* Footer */}
    
  </div>
  )
};

export default Home;
