import "./projectdetail.scss";
import ContentLink from "../../components/content-link/ContentLink";
import "../../components/project-box/projectbox.scss";
import { FaGithub, FaBehance } from "react-icons/fa";

const ProjectDetail = (props) => {
  //const ProjectDetail = () => {
  return (
    <section className="detail-project">
      <div className="project-category">{props.category}</div>

      <div className="container box-project">
        <button className={props.color}>{props.tag}</button>
        <h1>{props.name}</h1>
        <p className="description">{props.text}</p>
        <p>
          {props.github && (
            <a href="{props.github}">
              <FaGithub className="icon" />
            </a>
          )}
          {props.behance && (
            <a href="{props.behance}">
              <FaBehance className="icon" />
            </a>
          )}
        </p>
        <div className="box-images">
          {props.images &&
            props.images.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
