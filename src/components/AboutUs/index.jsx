const AboutUs = () => {
  return (
    <div>
      {/* <!--About Us--> */}
      <section class="pb-0" id="about-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 wow fadeInLeft">
              <div class="heading-area">
                <span class="sub-title">We are megaone company</span>
                <h2 class="title">
                  We are making{" "}
                  <span class="alt-color js-rotating">design, ideas</span>{" "}
                  better for everyone
                </h2>
                <p class="para">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum.
                </p>
                <a
                  class="btn btn-large btn-rounded btn-pink btn-hvr-blue mt-3"
                  href="#!"
                >
                  Learn More
                  <div class="btn-hvr-setting">
                    <ul class="btn-hvr-setting-inner">
                      <li class="btn-hvr-effect"></li>
                      <li class="btn-hvr-effect"></li>
                      <li class="btn-hvr-effect"></li>
                      <li class="btn-hvr-effect"></li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInRight">
              <div class="half-img mt-5 pt-4 mt-lg-0 pt-lg-0">
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
