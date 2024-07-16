import LinkedIn from "../assets/bxl-linkedin.svg.svg"
import Github from "../assets/Vector.svg"
import "../styles/SocialIconHero.css"

function SocialIconHero(){
    return(
        <div className="hero-icon-container">
        <div className="In">
        <img id="linkedIn" src={LinkedIn}/>
        </div>
        <div className="Gi">
        <img id="Github" src={Github}/>
        </div>
        </div>
    )
}

export default SocialIconHero;