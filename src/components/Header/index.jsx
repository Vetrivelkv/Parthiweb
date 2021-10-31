
const Header = () => {
  return (
    <div>
        
      {/* <!--Header Start--> */}
      <header className="cursor-light">
        {/* <!--Navigation--> */}
        <nav className="navbar navbar-top-default navbar-expand-lg navbar-gradient nav-icon alt-font">
          <div className="container">
            <a className="logo link scroll" href="#!" title="Logo">
              {/* <!--Logo Default--> */}
              <img
                alt="logo"
                className="logo-dark default"
                src="/agency/img/logo-white.png"
              />
            </a>

            {/* <!--Nav Links--> */}
            <div className="collapse navbar-collapse" id="agency">
              
              <a
                className="btn btn-medium btn-rounded btn-transparent-white btn-hvr-white ml-3 moveQuoteBtn"
                data-animation-duration="500"
                data-fancybox
                data-src="#animatedModal"
                href="#!"                                
              >
                Get A Quote
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

            {/* <!--Menu Button--> */}
            <button className="fullnav-toggler link" id="full-menu-1" type="button">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>

            {/* <!--Slider Social--> */}
            
          </div>
        </nav>

        {/* <!--Full menu--> */}
        <div className="nav-holder main style-2 alt-font">
          {/* <!--Menu Button--> */}
          <button className="fullnav-close link" type="button">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          <div className="container">
            <div className="shape-left">
              <nav className="navbar full-menu-navigation left">
                <ul className="list-unstyled">
                  <li>
                    <a className="link scroll" href="#home">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Home</span>
                    </a>
                  </li>
                  <li>
                    <a className="link scroll" href="#about-us">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">About</span>
                    </a>
                  </li>
                  <li>
                    <a className="link scroll" href="#portfolio">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Work</span>
                    </a>
                  </li>
                  <li>
                    <a className="link scroll" href="#clients">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Clients</span>
                    </a>
                  </li>
                  <li>
                    <a className="link scroll" href="#blog">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Blog</span>
                    </a>
                  </li>
                  <li>
                    <a className="link scroll" href="#contact">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Contact</span>
                    </a>
                  </li>
                </ul>
                <span
                  className="full-menu-dot"
                  style={{ transform: "scale(0)" }}
                ></span>
              </nav>
              <img alt="shape" src="agency/img/shape-8.png" />
            </div>
            <div className="shape-right">
              <div className="full-menu-detail hide-cursor">
                <h6 className="title">Press Contact</h6>
                <p>
                  <i className="fas fa-user-alt"></i>David Warrior
                </p>
                <p>
                  <i className="fas fa-mobile-alt"></i>+97 53 49 24 78 36
                </p>
                <p>
                  <i className="fas fa-envelope"></i>contact@megaone.com
                </p>
              </div>
              <img alt="shape" src="agency/img/shape-7.png" />
            </div>
          </div>
        </div>

        {/* <!--Get Quote Model Popup--> */}
        <div className="animated-modal hidden quote-content" id="animatedModal">
          {/* <!--Heading--> */}
          <div className="heading-area pb-2 mx-570">
            <span className="sub-title">We are megaone company</span>
            <h2 className="title mt-2">
              Lets start your{" "}
              <span className="alt-color js-rotating">project, website</span>
            </h2>
          </div>
          {/* <!--Contact Form--> */}
          <form className="contact-form" id="modal-contact-form-data">
            <div className="row">
              {/* <!--Result--> */}
              <div className="col-12" id="quote_result"></div>

              {/* <!--Left Column--> */}
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="quote_name"
                    name="quoteName"
                    placeholder="Name"
                    required=""
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="quote_contact"
                    name="userPhone"
                    placeholder="Contact #"
                    required=""
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="quote_type"
                    name="projectType"
                    placeholder="Project type"
                    required=""
                    type="text"
                  />
                </div>
              </div>

              {/* <!--Right Column--> */}
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="quote_email"
                    name="userEmail"
                    placeholder="Email"
                    required=""
                    type="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="quote_address"
                    name="userAddress"
                    placeholder="City / Country"
                    required=""
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="quote_budget"
                    name="quoteBudget"
                    placeholder="Budget"
                    required=""
                    type="text"
                  />
                </div>
              </div>

              {/* <!--Full Column--> */}
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="quote_message"
                    name="userMessage"
                    placeholder="Please explain your project in detail."
                  ></textarea>
                </div>
              </div>

              {/* <!--Button--> */}
              <div className="col-md-12">
                <div className="form-check">
                  <label className="checkbox-lable">
                    Contact by phone ins preffered
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>

                <a
                  className="btn btn-large btn-rounded btn-blue btn-hvr-pink modal_contact_btn"
                  href="#!"
                  id="quote_submit_btn"
                >
                  <i
                    className="fa fa-spinner fa-spin mr-2 d-none"
                    aria-hidden="true"
                  ></i>
                  <b>Send Message</b>
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
          </form>
        </div>
      </header>
      {/* <!--Header End--> */}
    </div>
  );
};
export default Header;
