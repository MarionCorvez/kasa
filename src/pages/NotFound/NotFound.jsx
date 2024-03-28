import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="error">
      <h1 className="error__heading">404</h1>
      <p className="error__content">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}
