import { Link } from "react-router-dom";

function ContentLink(props) {
  return (
    <Link className="home-button" to={props.to}>
      {props.children}
    </Link>
  );
}

export default ContentLink;
