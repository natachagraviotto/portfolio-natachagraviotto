import "./projectbox.scss";

function ProjectBox(props) {
  const combinedClass = `box-project ${props.bgclass}`;

  return (
    <>
      <div className={combinedClass}>
        <a href={props.link}>
          <button className={props.color}>{props.title}</button>
        </a>
      </div>
    </>
  );
}
export default ProjectBox;
