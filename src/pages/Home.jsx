import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hr from "../components/Hr";
import "../styles/Home.css"
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero/>
      <div className="hr">
      <Hr/>
      </div>
      <SecondSection/>
      <div className="hr">
      <Hr/>
      </div>
    <ThirdSection/>
    <div className="hr">
      <Hr/>
      </div>
    </div>
  );
}

export default Home;
