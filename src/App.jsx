import "./App.scss";
import "./scss/global.scss";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="header">
        <strong className="logotipo">MI LOGO</strong>
        <nav className="header-nav">
          <Link className="header-link" to="/">
            Home
          </Link>
          <Link className="header-link" to="/projects">
            Projects
          </Link>
          <Link className="header-link" to="/about">
            About
          </Link>
          <Link className="header-link" to="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
