const Parallax = () => {
  return (
    <div>
      {/* <!--Parallax Start--> */}
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="heading-area">
                <span className="sub-title">We are megaone company</span>
                <h2 className="title">
                  <span className="main-color js-rotating">
                    Robust Design, Creative Idea
                  </span>{" "}
                  and Development Solutions
                </h2>
                <p className="para">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum.
                </p>
                <a
                  className="btn btn-large btn-rounded btn-blue btn-hvr-pink mt-3"
                  href="#!"
                >
                  Learn More
                  <div className="btn-hvr-setting">
                    <ul className="btn-hvr-setting-inner">
                      <li className="btn-hvr-effect"></li>
                      <li className="btn-hvr-effect"></li>
                      <li className="btn-hvr-effect"></li>
                      <li className="btn-hvr-effect"></li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="half-img mt-5 pt-4 mt-lg-0 pt-lg-0">
                <img alt="info" src="agency/img/vector-art-4.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Parallax End--> */}
    </div>
  );
};
export default Parallax;
