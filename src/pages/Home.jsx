import ScrollIndicator from "../components/Layout/ScrollIndicator";
import Hero from "../components/Home/Hero";
import About from "./About";
import Products from "./Product";
import Services from "./Services";
import WhyCareers from "./WhyCareers";
import ParasymPhilosophy from "./ParasymPhilosophy";
// import BlogGrid from "../components/Blogs/BlogGrid";
import ContactUs from "./ContactUs";
// import CaseStudiesGrid from "../components/CaseStudies/CaseStudiesGrid";

const Home = () => {
  return (
    <>
      <ScrollIndicator />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why-us">
        <WhyCareers />
      </section>

      <section id="philosophy">
        <ParasymPhilosophy />
      </section>

      {/* <section id="blogs">
        <h2 style={{ fontSize: "62px", textAlign: "center", color: "#ff7a00" }}>
          Blogs
        </h2>
        <BlogGrid limit={3} />
      </section> */}

      {/* <section id="case-studies">
        <h2
          style={{ fontSize: "62px", textAlign: "center", color: "#ff7a00" }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
        >
          Case Studies
        </h2>
        <CaseStudiesGrid limit={3} />
      </section> */}


      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
};

export default Home;