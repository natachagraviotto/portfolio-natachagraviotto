import "./projectbox.scss";
import { Link } from "react-router-dom";

function ProjectBox(props) {
  const combinedClass = `box-project ${props.bgclass}`;

  return (
    <div className={combinedClass}>
      <Link to={props.link}>
        <button className={props.color}>{props.title}</button>
      </Link>
    </div>
  );
}
export default ProjectBox;
