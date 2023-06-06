import { Link } from "react-router-dom";
import IconArrowReturnRight from "../icons/IconArrow";

function ContentLink(props) {
  return (
    <>
      <IconArrowReturnRight />
      <Link className="home-button" to={props.to}>
        {props.children}
        {props.icon}
      </Link>
    </>
  );
}
export default ContentLink;
