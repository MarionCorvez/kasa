import { Link } from "react-router-dom";
import kasaLogo from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="section-footer">
        <Link to="/">
          <img
            src={kasaLogo}
            className="section-footer__logo"
            alt="Logo Kasa"
          />
        </Link>
        <p className="section-footer__content">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    </>
  );
}
