import "./projectdetail.scss";
import ContentLink from "../../components/content-link/ContentLink";
import "../../components/project-box/projectbox.scss";
import { useParams } from "react-router-dom";

const ProjectDetail = (props) => {
  //const ProjectDetail = () => {
  return (
    <section className="detail-project">
      <h1>{props.title}</h1>

      <div className="container box-project">
        <ContentLink text="Download my CV" />
        <h2 className="home-h2">{props.subtitle}</h2>
        <p>{props.text}</p>
        <p>
          ICONO <a href="{props.github}">{props.github} :) </a>
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
