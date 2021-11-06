import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./styles.css";

const Teams = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    //do something here when inView is true
    if (inView) {
      document.getElementById("teamsHeader").classList.add("fadeInRight");
      document.getElementById("carouselContainer").classList.add("fadeInRight");
    } else {
      document.getElementById("teamsHeader").classList.remove("fadeInRight");

      document
        .getElementById("carouselContainer")
        .classList.remove("fadeInRight");
    }
  }, [inView]);
  useEffect(() => {
    slider();
  }, []);
  return (
    <div className="team_header" ref={ref}>
      <div class="row teams_inner_head">
        <div
          class="col-md-5 col-lg-5 col-sm-5 col-xs-12 add_Integration"
          id="teamsHeader"
        >
          <div>
            <p
              className="headTextTeam"
              id="headerTeam1"
              style={{ fontWeight: "bold" }}
            >
              WE HAVE
            </p>
          </div>

          <div style={{ paddingTop: "5.4%" }}>
            <p className="headTextTeam" style={{ fontWeight: "bold" }}>
              AMAZING TEAM
            </p>
          </div>

          <div style={{ paddingTop: "12.4%" }}>
            <p style={{ fontSize: "1.0rem" }}>
              Not just being photographers, we creates a unique and expressive
              designs. We have a focused team with a specialized skill and
              experience to give you a better result.
            </p>
          </div>
        </div>
        <div class="col-md-7 col-lg-7 col-sm-7 col-xs-12">
          <div class="carousel-container" id="carouselContainer">
            <div class="navigation">
              <div class="prev nav-btn">&lt;</div>
              <div class="next nav-btn">&gt;</div>
              <div class="carousel">
                <div class="item_97 main">
                  <div class="row">
                    <div class="col-md-12">
                      <img
                        src="/agency/img/vector-art-2.png"
                        alt="client_1"
                        className="teamSlideMobile"
                      />
                      <div
                        style={{
                          textAlign: "center",
                        }}
                        className="team_caption"
                      >
                        <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                          Mr. Kumar
                        </p>
                        <p style={{ fontSize: "0.9rem", marginTop: "-25px" }}>
                          Proprietor & Senior Photographer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item_97">
                  <div class="row">
                    <div class="col-md-12" id="carousel1">
                      <img
                        src="/agency/img/vector-art-2.png"
                        alt="client_1"
                        className="teamSlideMobile"
                      />
                      <div
                        style={{
                          textAlign: "center",
                        }}
                        className="team_caption"
                      >
                        <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                          Mr. Parthiban
                        </p>
                        <p style={{ fontSize: "0.9rem", marginTop: "-25px" }}>
                          Business Development Executive
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;

const slider = () => {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const images = document.querySelector(".carousel").children;
  const totalImages = images.length;
  let index = 0;

  prev.addEventListener("click", () => {
    nextImage("next");
  });

  next.addEventListener("click", () => {
    nextImage("prev");
  });

  function nextImage(direction) {
    if (direction === "next") {
      index++;
      if (index === totalImages) {
        index = 0;
      }
    } else {
      if (index === 0) {
        index = totalImages - 1;
      } else {
        index--;
      }
    }

    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("main");
      images[i].classList.remove("fadeInRightCarousel");
    }
    images[index].classList.add("main");
    images[index].classList.add("fadeInRightCarousel");
  }
};
