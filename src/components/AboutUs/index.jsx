const AboutUs = () => {
  return (
    <div>
      {/* <!--About Us--> */}
      <section className="pb-0" id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="heading-area">
                <span className="sub-title">We are megaone company</span>
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
            <div className="col-lg-6 wow fadeInRight">
              <div className="half-img mt-5 pt-4 mt-lg-0 pt-lg-0">
                <img alt="vector" src="agency/img/vector-art-2.png" />
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
