import "./App.scss";
import "./scss/global.scss";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="menu">
        <strong className="logotipo">MI LOGO</strong>
        <nav className="navegation">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
