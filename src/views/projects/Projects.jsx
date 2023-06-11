import "./projects.scss";
import ProjectBox from "../../components/project-box/ProjectBox";

function Projects() {
  return (
    <section className="hero-projects">
      <h1>Projects</h1>
      <div className="carrusel-projects">
        <ProjectBox title="project1" color="bisque" bgclass="bg-viro" />
        <ProjectBox title="project2" color="pink" bgclass="bg-app" />

        <div className="box-project">
          <button className="box-button box-button-pink">
            Brand Identity Design
          </button>
        </div>

        <div className="box-project">
          <button className="box-button box-button-bisque">
            Brand Identity Design
          </button>
        </div>
        <div className="box-project">
          <button className="box-button box-button-lightgreen">
            Brand Identity Design
          </button>
        </div>
        <div className="box-project">
          <button className="box-button box-button-lightyellow">
            Brand Identity Design
          </button>
        </div>
        <div className="box-project">
          <button className="box-button box-button-lightcoral">
            Brand Identity Design
          </button>
        </div>
        <div className="box-project">
          <button className="box-button box-button-lightseagreen">
            Brand Identity Design
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
