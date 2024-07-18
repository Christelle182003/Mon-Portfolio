import Formulaire from "./Formulaire";
import Linkedin from "../assets/bxl-linkedin.svg.svg"
import Github from "../assets/Vector.svg"
import Twitter from "../assets/Vector (1).svg"
import Insta from "../assets/bxl-instagram.svg.svg"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
      <div id="footer-left">
        <h1>LET'S CONNECT</h1>
        <p>Say hello at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vigninouavodaho@gmail.com" target="_blank" id="email">vigninouavodaho@gmail.com</a>for more info, here's my resume</p>
        <div className="social-media">
        <img src={Linkedin}/>
        <img src={Github}/>
        <img src={Twitter}/>
        <img src={Insta}/>
        </div>
      </div>
      <Formulaire/>
      </div>
      <p>© 2023 Christelle AVODAHO</p>
    </div>
  );
}

export default Footer;
