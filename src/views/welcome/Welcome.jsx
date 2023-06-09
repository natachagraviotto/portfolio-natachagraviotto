import ContentLink from "../../components/content-link/ContentLink";
import IconArrowReturnRight from "../../components/icons/IconArrow"; //Importamos el icono
import "./welcome.scss";

function Welcome() {
  return (
    <section className="welcome-page">
      <div className="welcome-page">
        <h2 className="home-h2">WELCOME</h2>
        <div className="welcome-button">
          <a href="/landing" className="WELCOME">
            Goooooo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
