import { NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <nav>
          <NavLink to="/" className="nav__link">
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className="nav__link">
            A propos
          </NavLink>
        </nav>
      </header>
    </>
  );
}
