import BannerImage from "../../components/Banner/Banner.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import coverHome from "/images/cover-home.webp";

export default function Home() {
  return (
    <main>
      <section className="banner">
        <h1 className="heading-1 banner__heading">
          Chez vous, partout et ailleurs
        </h1>
        <BannerImage src={coverHome} altText="Montagnes au-dessus de la mer" />
      </section>
      <Gallery />
    </main>
  );
}
