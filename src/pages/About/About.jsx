import BannerImage from "../../components/Banner/Banner.jsx";
import coverAbout from "/images/cover-about.webp";
import Accordion from "../../components/Accordion/Accordion.jsx";
import data from "../../../public/data/AccordionData.js";

export default function About() {
  return (
    <main>
      <section className="banner">
        <BannerImage src={coverAbout} altText="Paysage de montagne" />
      </section>
      <section className="section-accordion">
        {data.map((data, index) => (
          <Accordion key={index} title={data.title} content={data.content} />
        ))}
      </section>
    </main>
  );
}
