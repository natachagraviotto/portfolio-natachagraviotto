import ContentLink from "../../components/content-link/ContentLink";
import "./landing.scss";

function Landing() {
  return (
    <section className="home-page">
      <div className="title">Heeey, I’m Natacha Graviotto</div>
      <h1>I’m a UX/UI designer, graphic designer & front-end developer</h1>
      <div className="box">
        <ContentLink to="/projects" text="See my projects" icon="" />
        <ContentLink to="/projects" text="Contact me" icon="" />
      </div>
    </section>
  );
}

export default Landing;
