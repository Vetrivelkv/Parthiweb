const Services = () => {
  return (
    <div>
      {/* <!--Services Start--> */}
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="process-wrapp">
                <span className="pro-step blue">
                  <i aria-hidden="true" className="fas fa-folder-open"></i>
                </span>
                <h4 className="service-heading">
                  World leader in consulting and finance
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-wrapp">
                <span className="pro-step midnight">
                  <i aria-hidden="true" className="fas fa-code"></i>
                </span>
                <h4 className="service-heading">
                  A focused team with a specialized skill
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-wrapp">
                <span className="pro-step purple">
                  <i aria-hidden="true" className="fas fa-cog"></i>
                </span>
                <h4 className="service-heading">
                  Trusted and professional advisors for you
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-wrapp">
                <span className="pro-step pink">
                  <i aria-hidden="true" className="fas fa-edit"></i>
                </span>
                <h4 className="service-heading">
                  Experience to give you a better results
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Services End--> */}
    </div>
  );
};
export default Services;
