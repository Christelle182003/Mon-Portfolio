import "../styles/Hero.css";
import ContactButton from "./ContactButton";
import HeroImg from "../assets/potrait.svg";
import SocialIconHero from "./SocialIconHero";
import circle from "../assets/circle.svg";
import GirlImg from "../assets/Banner.svg"

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <h1>
          HI I'M
          <br />
          CHRISTELLE AVODAHO
        </h1>
        <p id="my-description">
          Développeur front-end spécialisé en création d'interfaces web modernes
          et réactives.
        </p>
        <div className="hero-contacts">
          <div id="comp-hero-1">
            <ContactButton description="CONTACT ME." icon={circle} />
          </div>
          <div className="comp-hero-2">
            <SocialIconHero />
          </div>
        </div>
      </div>
      {/* <div className="hero-right">
        <img id="hero-img" src={HeroImg} alt="Hero" />
      </div> */}
      <div className="hero-right">
        <img id="hero-img" src={GirlImg} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
