import "../styles/Formulaire.css";
function Formulaire() {
  return (
    <div>
      <div className="formulaire">
        <div class="line-1">
          <h5>first name*</h5>
          <input
            class="name-input"
            type="text"
            name="first-name"
            id="first-name"
          />
        </div>
        <div class="line-2">
          <h5>email adress</h5>
          <input id="email-input" type="email" name="email" />
        </div>
        <div class="line-2">
          <h5>Subject</h5>
          <input id="subject-input" type="text" />
        </div>
        <div class="line-4">
          <h5>Message</h5>
          <textarea name="Message" id="Message"></textarea>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
