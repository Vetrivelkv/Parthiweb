const Map = () => {
  return (
    <div>
      {/* <!--Client Map--> */}
      <section className="gradient-bg2" id="client">
        <h2 className="d-none">hidden</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!--Client Slider--> */}
              <div className="owl-carousel partners-slider">
                <div className="logo-item">
                  <img alt="client-logo" src="agency/img/client-1.png" />
                </div>
                <div className="logo-item">
                  <img alt="client-logo" src="agency/img/client-2.png" />
                </div>
                <div className="logo-item">
                  <img alt="client-logo" src="agency/img/client-3.png" />
                </div>
                <div className="logo-item">
                  <img alt="client-logo" src="agency/img/client-4.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Client End--> */}

      {/* <!--Map Start--> */}
      <div className="p-0 gradient-bg2 map-area">
        <div className="container">
          {/* <!--Map Initialize--> */}
          <div className="full-map" id="map"></div>
        </div>
      </div>
      {/* <!--Map End--> */}
    </div>
  );
};
export default Map;
