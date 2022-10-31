import { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4099ff]"
    >
      <Head>
        <title>Azaan&apos;s Portfolio</title>
      </Head>
      <Header />
      <section id="Profile" className="snap-start">
        <Profile />
      </section>
      <section id="About" className="snap-center">
        <About />
      </section>
      <section id="Skills" className="snap-start">
        <Skills />
      </section>
      <section id="Projects" className="snap-start">
        <Projects/>
      </section>

      <section id="Projects" className="snap-start">
        <Footer/>
      </section>
      {/* Footer/Contacts */}
    </div>
  );
};

export default Home;
