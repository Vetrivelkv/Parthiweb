const Counters = () => {
  return (
    <div>
      {/* <!--Counters Start--> */}
      <section class="gradient-bg2" id="counters">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pl-lg-4 order-lg-2 wow fadeInRight">
              <div class="heading-area">
                <span class="sub-title text-white">We are megaone company</span>
                <h2 class="title text-white">
                  We have done some great{" "}
                  <span class="js-rotating">stuff, idea</span>.
                </h2>
                <p class="para text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected.
                </p>
              </div>
              <ul class="counter-list list-unstyled">
                <li class="counter-item">
                  <i aria-hidden="true" class="fas fa-users text-white"></i>
                  <h6 class="counter-number text-white">
                    <span class="count">500</span>+
                  </h6>
                  <p class="sub-title text-white">Happy Clients</p>
                </li>
                <li class="counter-item">
                  <i aria-hidden="true" class="fas fa-list-alt text-white"></i>
                  <h6 class="counter-number text-white">
                    <span class="count">1074</span>+
                  </h6>
                  <p class="sub-title text-white">Lines Of Code</p>
                </li>
                <li class="counter-item">
                  <i aria-hidden="true" class="fas fa-award text-white"></i>
                  <h6 class="counter-number text-white">
                    <span class="count">600</span>+
                  </h6>
                  <p class="sub-title text-white">Project Completed</p>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 wow fadeInLeft">
              <div class="half-img mt-5 pt-4 mt-lg-0 pt-lg-0">
                <img alt="vector" src="agency/img/vector-art-3.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Counters End--> */}
    </div>
  );
};
export default Counters;
