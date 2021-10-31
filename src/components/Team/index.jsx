import { useEffect } from "react";
import "./styles.css";

const Teams = () => {
  useEffect(() => {
    slider();
  }, []);
  return (
    <div
      style={{
        background: "#f71c52",
        color: "white",
        height: "500px",
        marginTop: "5%",
      }}
    >
      <div style={{ padding: "110px 100px" }} class="row">
        <div class="col-md-5 col-lg-5 col-sm-5">
          <div>
            <p style={{ fontSize: "3.5rem", fontWeight: "bold" }}>WE HAVE</p>
          </div>

          <div style={{ paddingTop: "5.4%" }}>
            <p style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
              AMAZING TEAM
            </p>
          </div>

          <div style={{ paddingTop: "12.4%" }}>
            <p style={{ fontSize: "1.1rem" }}>
              Not just being photographers, we creates a unique and expressive
              designs. We have a focused team with a specialized skill and
              experience to give you a better result.
            </p>
          </div>
        </div>
        <div class="col-md-7 col-lg-7 col-sm-7">
          <div class="carousel-container">
            <div class="navigation">
              <div class="prev nav-btn">&lt;</div>
              <div class="next nav-btn">&gt;</div>
              <div class="carousel">
                <div class="item_97 main">
                  <div class="row">
                    <div class="col-md-6">
                      <img
                        src="https://megaone.acrothemes.com/creative-startup/img/team1.jpg"
                        alt="client_1"
                      />
                      <div
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ fontSize: "1.3rem" }}>Client Name</p>
                        <p style={{ fontSize: "0.9rem", marginTop: "-25px" }}>
                          Client Role
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <img
                        src="https://megaone.acrothemes.com/creative-startup/img/team1.jpg"
                        alt="client_2"
                      />
                      <div
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ fontSize: "1.3rem" }}>Client Name</p>
                        <p style={{ fontSize: "0.9rem", marginTop: "-25px" }}>
                          Client Role
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item_97">
                  <div class="row">
                    <div class="col-md-6">
                      <img
                        src="https://megaone.acrothemes.com/creative-startup/img/team1.jpg"
                        alt="client_3"
                      />
                      <div
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ fontSize: "1.3rem" }}>Client Name</p>
                        <p style={{ fontSize: "0.9rem", marginTop: "-25px" }}>
                          Client Role
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <img
                        src="https://megaone.acrothemes.com/creative-startup/img/team1.jpg"
                        alt="client_4"
                      />
                      <div
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ fontSize: "1.3rem" }}>Client Name</p>
                        <p style={{ fontSize: "0.9rem", marginTop: "-25px" }}>
                          Client Role
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item_97">
                  <div class="row">
                    <div class="col-md-6">
                      <img
                        src="https://megaone.acrothemes.com/creative-startup/img/team2.jpg"
                        alt="client_5"
                      />
                      <div
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ fontSize: "1.3rem" }}>Client Name</p>
                        <p style={{ fontSize: "0.9rem", marginTop: "-25px" }}>
                          Client Role
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <img
                        src="https://megaone.acrothemes.com/creative-startup/img/team2.jpg"
                        alt="client_6"
                      />
                      <div
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ fontSize: "1.3rem" }}>Client Name</p>
                        <p style={{ fontSize: "0.9rem", marginTop: "-25px" }}>
                          Client Role
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
    }
    images[index].classList.add("main");
  }
};
