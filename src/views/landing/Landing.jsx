import ContentLink from "../../components/content-link/ContentLink";

function Landing() {
  return (
    <section className="home-page">
      <h2 className="home-h2">Heeey, I’m Natacha Graviotto</h2>
      <h1 className="home-h1">
        I’m a UX/UI designer, graphic designer & front-end developer
      </h1>
      <div className="home-buttons">
        <ContentLink to="/projects" children="See my projects" svgIcon="" />
        <ContentLink to="/contact">Contact me :)</ContentLink>
      </div>
    </section>
  );
}

export default Landing;
