import { Link } from "react-router-dom";
import "./contentlink.scss";
import IconArrowReturnRight from "../icons/IconArrow";

function ContentLink(props) {
  return (
    <div className="box-button">
      <>
        <IconArrowReturnRight />
        <Link className="button" to={props.to}>
          {props.text}
          {props.icon}
        </Link>
      </>
    </div>
  );
}
export default ContentLink;
