import Accordion from "../components/Accordion.jsx";
import BannerImage from "../components/Banner.jsx";
import coverAbout from "../assets/images/cover-about.webp";

export default function About() {
  return (
    <main>
      <section className="banner">
        <BannerImage src={coverAbout} altText="Paysage de montagne" />
      </section>
      <Accordion />
    </main>
  );
}
