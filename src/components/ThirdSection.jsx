import "../styles/ThirdSection.css";
import AboutMe from "./AboutMe";

function ThirdSection() {
  return (
    <div className="third-section-container">
      <div>
        <AboutMe />
      </div>
      <div>
        <div id="third-section-link">
          <a href="/about">MORE ABOUT ME</a>
          <hr id="hr-link" />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
