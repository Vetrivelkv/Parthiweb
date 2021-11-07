import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const AboutUs = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    //do something here when inView is true
    if (inView) {
      document
        .getElementById("heading-area-aboutus")
        .classList.add("fromRightClass");

      document.getElementById("headerAboutUs").classList.add("fadeInRight");
    } else {
      document
        .getElementById("heading-area-aboutus")
        .classList.remove("fromRightClass");
      document.getElementById("headerAboutUs").classList.remove("fadeInRight");
    }
  }, [inView]);
  return (
    <div ref={ref}>
      {/* <!--About Us--> */}
      <section className="pb-0" id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="heading-area" id="heading-area-aboutus">
                <span className="sub-title">We are VKR Videos</span>
                <h2 className="title">
                  We are making <span className="alt-color">design</span>{" "}
                  {/* <span className="alt-color js-rotating">design, ideas</span>{" "} */}
                  better for everyone
                </h2>
                <p className="para">
                  We are specialized in wedding, corporate, family, school,
                  personal portraits and industrial photography and videography
                  by traveling to your desired destination to capture the
                  perfect moment in the perfect place and also we will be there
                  with you consistently to support all your needs of the event
                  until you are completely satisfied. We are incredibly blessed
                  to have a team of photographers who work with us on any given
                  weekend. We would love to visit with you by phone or in person
                  and talk about your wedding, event, portrait session or video
                  project. Please reach out to us through the Contact Page.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow">
              <div
                className="half-img mt-5 pt-4 mt-lg-0 pt-lg-0"
                id="headerAboutUs"
              >
                {/* <img alt="vector" src="agency/img/vector-art-2.png" /> */}
                <img alt="vector" src="images/2.PNG" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--About Us End--> */}
    </div>
  );
};
export default AboutUs;
