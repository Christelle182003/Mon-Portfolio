import AboutMe from "./AboutMe";
import "../styles/HeroAbout.css";
import ContactButton from "./ContactButton";
import SocialIconHero from "./SocialIconHero";
import Capabilities from "./Capabilities";
import HeroAboutImg from "../assets/6dd8e389a3 1.svg";
import circle from "../assets/circle.svg";


function HeroAbout() {
  return (
    <div className="hero-about-container">
      <AboutMe />
      <div className="about-hero-icon">
        <ContactButton description="DOWNALD RESUME" icon={circle}/>
        <div id="about-hero-social">
          <SocialIconHero />
        </div>
      </div>
      <div className="hero-about-img">
        <img id="about-img" src={HeroAboutImg} />
      </div>
      <div id="capabilitie">
        <Capabilities />
      </div>
    </div>
  );
}

export default HeroAbout;
