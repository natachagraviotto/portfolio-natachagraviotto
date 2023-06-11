import "./projectbox.scss";

function ProjectBox(props) {
  const combinedClass = `box-project ${props.bgclass}`;

  return (
    <>
      <div className={combinedClass}>
        <button className={props.color}>{props.title}</button>
      </div>
    </>
  );
}
export default ProjectBox;
