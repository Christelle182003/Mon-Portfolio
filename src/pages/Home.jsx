import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hr from "../components/Hr";
import "../styles/Home.css";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    ${'' /*  */}
  }

  body {
    margin: 0;
    padding: 0;
    ${'' /* overflow-x: hidden; */}
    width: 100%;
  }
`;

function Home() {
  return (
    <div className="home-page">
      <GlobalStyle />
      <Hero />
      <div className="hr">
        <Hr />
      </div>
      <SecondSection />
      <div className="hr">
        <Hr />
      </div>
      <ThirdSection />
      <div className="hr">
        <Hr />
      </div>
    </div>
  );
}

export default Home;
