import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Counters = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    //do something here when inView is true
    if (inView) {
      document.getElementById("counterHeader").classList.add("fadeInLeft");
      document.getElementById("counterHeader2").classList.add("fadeInRight");
    } else {
      document.getElementById("counterHeader").classList.remove("fadeInLeft");

      document.getElementById("counterHeader2").classList.remove("fadeInRight");
    }
  }, [inView]);

  return (
    <div ref={ref} style={{marginTop:'-150px'}}>
      {/* <!--Counters Start--> */}
      <section class="gradient-bg2" id="counters">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pl-lg-4 order-lg-2 wow fadeInRight">
              <div id="counterHeader">
                <div class="heading-area">
                  <span class="sub-title text-white">We are VKR Videos</span>
                  <h2 class="title text-white">
                    We have done some great stuff
                  </h2>
                  <p class="para text-white">
                    Most things in life are moments of pleasure and a lifetime
                    of embarrassment, we photograph all your moment of
                    embarrassment and a lifetime of pleasure. We ensure that we
                    devote proper time and attention to all our clients.
                  </p>
                </div>
                <ul class="counter-list list-unstyled">
                  <li class="counter-item">
                    <i aria-hidden="true" class="fas fa-users text-white"></i>
                    <h6 class="counter-number text-white">
                      <span class="count">99</span>+
                    </h6>
                    <p class="sub-title text-white">Happy Clients</p>
                  </li>
                  <li class="counter-item">
                    <i
                      aria-hidden="true"
                      class="fas fa-list-alt text-white"
                    ></i>
                    <h6 class="counter-number text-white">
                      <span class="count">150</span>+
                    </h6>
                    <p class="sub-title text-white">Lines Of Code</p>
                  </li>
                  <li class="counter-item">
                    <i aria-hidden="true" class="fas fa-award text-white"></i>
                    <h6 class="counter-number text-white">
                      <span class="count">150</span>+
                    </h6>
                    <p class="sub-title text-white">Project Completed</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInLeft">
              <div class="half-img mt-5 pt-4 mt-lg-0 pt-lg-0">
                <div id="counterHeader2">
                  <img alt="vector" src="images/vector-art-3.png" />
                </div>
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
