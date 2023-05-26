import ContentLink from "../../components/content-link/ContentLink";

function Landing() {
  return (
    <section className="about-page">
      <h2 className="title">About</h2>
      <h1 className="home-h1">
        I’m a UX/UI designer, graphic designer & front-end developer
      </h1>
      <section className="button-img">
        <div className="home-button">
          <ContentLink to="/projects">Download my CV</ContentLink>
        </div>
        <div>
          <img
            className="img-portrait"
            src="/src/assets/img/portrait.jpg"
            alt="Foto de perfil Natacha"
          />
        </div>
      </section>
    </section>
  );
}

export default Landing;
