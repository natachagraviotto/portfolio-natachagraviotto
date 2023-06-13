import "./projects.scss";
import ProjectBox from "../../components/project-box/ProjectBox";

function Projects() {
  return (
    <section className="hero-projects">
      <h1>Projects</h1>
      <div className="carrusel-projects">
        <ProjectBox
          title="Brand Identity Design"
          color="bisque"
          bgclass="bg-viro"
          link="/projects/viro"
        />
        <ProjectBox
          title="Prototipado App her"
          color="pink"
          link="/projects/app"
          bgclass="bg-app"
        />

        <ProjectBox
          title="Calculator project"
          color="pink"
          link="/projects/calculator"
          bgclass="bg-calculator"
        />
        <ProjectBox
          title="Brand Identity Design"
          color="bisque"
          bgclass="bg-viro"
          link="/projects/viro"
        />
        <ProjectBox
          title="Prototipado App her"
          color="pink"
          link="/projects/app"
          bgclass="bg-app"
        />

        <ProjectBox
          title="Calculator project"
          color="pink"
          link="/projects/calculator"
          bgclass="bg-calculator"
        />
      </div>
    </section>
  );
}

export default Projects;
