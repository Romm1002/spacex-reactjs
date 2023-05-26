import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ThemeMode from "../ThemeMode";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="24"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Members
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rockets" className="nav-link" aria-current="page">
                Rockets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/history" className="nav-link" aria-current="page">
                History
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/roadster" className="nav-link" aria-current="page">
                Roadster
              </Link>
            </li>
            <li className="nav-item">
                <Link to="/company" className="nav-link" aria-current="page">
                    About us
                </Link>
            </li>
          </ul>
        </div>
        <ThemeMode />
      </div>
    </nav>
  );
};

export default Navigation
