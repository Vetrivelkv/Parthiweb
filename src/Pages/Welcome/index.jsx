import Header from "../../components/Header";
import Home from "../../components/Home";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";
import Counters from "../../components/Counters";
// import TeamStart from "../../components/TeamStart";
// import Parallax from "../../components/Parallax";
import PortFolio from "../../components/Portfolio";
import Testimonial from "../../components/Testimonial";
// import Blog from "../../components/Blog";
// import Map from "../../components/Map";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import LatestBlogs from "../../components/LatestBlogs";
import Teams from "../../components/Team";
import Package from "../../components/Package";
const Welcome = () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <LatestBlogs />
      <Counters />
      <Teams />
      {/* <TeamStart /> */}
      {/* <Parallax /> */}
      <PortFolio />
      <Package />
      <Testimonial />
      {/* <Blog /> */}
      {/* <Map /> */}
      <Contact />
      <Footer />
      <Cursor />
      <span className="scroll-top-arrow">
        <i className="fas fa-angle-up"></i>
      </span>
    </div>
  );
};
export default Welcome;
