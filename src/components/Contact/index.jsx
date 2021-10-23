const Contact = () => {
  return (
    <div>
      {/* <!--Contact Start--> */}
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row align-items-top">
            <div className="col-lg-5 order-lg-2 wow fadeInRight">
              <div className="contact-detail">
                <div className="contact-dots" data-dots=""></div>
                {/* <!--Heading--> */}
                <div className="heading-area pb-5">
                  <h2 className="title mt-0 pb-1">Our Location</h2>
                  <p className="para">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered .
                  </p>
                </div>

                {/* <!--Address--> */}
                <ul className="address list-unstyled">
                  <li>
                    <span className="address-icon gradient-text2">
                      <i
                        aria-hidden="true"
                        className="fas fa-map-marker-alt"
                      ></i>
                    </span>
                    <span className="address-text">
                      123 Park Avenue, New York,United States
                    </span>
                  </li>
                  <li>
                    <span className="address-icon gradient-text2">
                      <i aria-hidden="true" className="fas fa-phone-volume"></i>
                    </span>
                    <span className="address-text">
                      <a className="mr-3" href="#!">
                        +1 631 1234 5678
                      </a>
                      <a href="#!">+1 631 1234 5678</a>
                    </span>
                  </li>
                  <li>
                    <span className="address-icon gradient-text2">
                      <i aria-hidden="true" className="fas fa-paper-plane"></i>
                    </span>
                    <span className="address-text">
                      <a className="mr-3 alt-color" href="#!">
                        email@website.com
                      </a>
                      <a className="mr-3 alt-color" href="#!">
                        abc@website.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7 mt-4 pt-3 mt-lg-0 pt-lg-0 wow fadeInLeft">
              {/* <!--Heading--> */}
              <div className="heading-area pb-2">
                <h2 className="title mt-0">Get In Touch</h2>
              </div>
              {/* <!--Contact Form--> */}
              <form className="contact-form" id="contact-form-data">
                <div className="row">
                  {/* <!--Result--> */}
                  <div className="col-12" id="result"></div>

                  {/* <!--Left Column--> */}
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="your_name"
                        name="userName"
                        placeholder="Name"
                        required=""
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="your_email"
                        name="userEmail"
                        placeholder="Email"
                        required=""
                        type="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="subject"
                        name="userSubject"
                        placeholder="Subject"
                        required=""
                        type="text"
                      />
                    </div>
                  </div>

                  {/* <!--Right Column--> */}
                  <div className="col-md-7">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        name="userMessage"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>

                  {/* <!--Button--> */}
                  <div className="col-md-12">
                    <a
                      className="btn btn-large btn-rounded btn-purple btn-hvr-blue d-block mt-4 contact_btn"
                      href="#!"
                      id="submit_btn"
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
          </div>
        </div>
      </section>
      {/* <!--Contact End--> */}
    </div>
  );
};
export default Contact;
