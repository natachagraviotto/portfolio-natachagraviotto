import "./App.scss";
import "./scss/global.scss";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="menu">
        <strong className="logotipo">MI LOGO</strong>
        <nav className="navegation">
          <Link className="link" to="/list">
            Projects
          </Link>
          <Link className="link" to="/list">
            About
          </Link>
          <Link className="link" to="/list">
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
