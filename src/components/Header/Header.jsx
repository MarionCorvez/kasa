import { Link, NavLink } from "react-router-dom";
import kasaLogo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <>
      <header className="section-header">
        <Link to="/">
          <img
            src={kasaLogo}
            className="section-header__logo"
            alt="Logo Kasa"
          />
        </Link>
        <nav className="nav">
          <NavLink to="/" className="nav__link">
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className="nav__link">
            A Propos
          </NavLink>
        </nav>
      </header>
    </>
  );
}
