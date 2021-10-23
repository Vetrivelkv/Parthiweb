const Footer = () => {
  return (
    <div>
      {/* <!--Footer Start--> */}
      <footer className="footer-style-1 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* <!--Social--> */}
            <div className="col-md-6">
              <div className="footer-social">
                <ul className="list-unstyled">
                  <li>
                    <a className="wow fadeInUp" href="#!">
                      <i aria-hidden="true" className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="#!">
                      <i aria-hidden="true" className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInUp" href="#!">
                      <i
                        aria-hidden="true"
                        className="fab fa-google-plus-g"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="#!">
                      <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInUp" href="#!">
                      <i aria-hidden="true" className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="#!">
                      <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Text--> */}
            <div className="col-md-6 text-md-right">
              <p className="company-about fadeIn">
                © 2020 MegaOne. Made With Love By{" "}
                <a href="#!">Themesindustry</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--Footer End--> */}
    </div>
  );
};
export default Footer;
