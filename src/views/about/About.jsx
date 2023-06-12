import "./about.scss";
import ContentLink from "../../components/content-link/ContentLink";

function Landing() {
  return (
    <section className="about-page">
      <h1>About</h1>
      <h2>I’m a UX/UI designer, graphic designer & front-end developer</h2>
      <section className="button-img">
        <ContentLink text="Download my CV" />
        <div class="box-img">
          <img
            className="img-portrait"
            src="/img/portrait.jpg"
            alt="Foto de perfil Natacha"
          />
        </div>
      </section>
    </section>
  );
}

export default Landing;
