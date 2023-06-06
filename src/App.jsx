import "./App.scss";
import "./scss/global.scss";
import { Link, Outlet } from "react-router-dom";
import { MdViewCompact } from "react-icons/md"; /* ASÍ IMPORTAMOS LA BIBLIOTECA DE ICONOS */

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="header-nav">
          <div className="header-logo">
            <a href="/landing">
              <img
                className="logotipo-negro"
                src="src/assets/img/logo_negro.png"
                alt="Logotipo"
              />
            </a>
          </div>
          <div className="header-nav">
            <Link className="header-link" to="/"></Link>
            <Link className="header-link" to="/landing">
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
          </div>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
