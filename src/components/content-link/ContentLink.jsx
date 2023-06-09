import { Link } from "react-router-dom";
import "./contentlink.scss";
import IconArrowReturnRight from "../icons/IconArrow";

function ContentLink(props) {
  return (
    <>
      <IconArrowReturnRight />
      <Link className="button" to={props.to}>
        {props.children}
        {props.icon}
      </Link>
    </>
  );
}
export default ContentLink;
