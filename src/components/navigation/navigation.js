import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        width="50"
                        height="24"
                        class="d-inline-block align-text-top"
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">
                                Membres
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/rockets" className="nav-link" aria-current="page">
                                Fusées
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/history" className="nav-link" aria-current="page">
                                Histoire
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/company" className="nav-link" aria-current="page">
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
