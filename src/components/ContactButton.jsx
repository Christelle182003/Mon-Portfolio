import "../styles/ContactButton.css";

function ContactButton({ description, icon }) {
    return (
        <button id="hero-btn">
        <div id="text-button">
        {description}
        </div>
            {icon && <img src={icon} alt="Button Icon" id="icoon"/>}
        </button>
    );
}

export default ContactButton;
