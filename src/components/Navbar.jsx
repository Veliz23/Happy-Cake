import {NavLink} from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg bg-dark text-whit" data-bs-theme="dark">
        <div className="container-fluid ">
            <a className="navbar-brand">Happy Cake</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link" aria-current="page">Contacto</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
};
