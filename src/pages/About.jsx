

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import HeroAbout from '../components/HeroAbout';
import Hr from '../components/Hr';
import Footer from '../components/Footer';
import Experience from '../components/Experience';

function About() {
  return (
    <div>
      <HeroAbout/>
      <div className="hrr">
      <Hr/>
      </div>
      <Experience/>
      <div className="hrr">
      <Hr/>
      </div>
    </div>
  );
}

export default About;
