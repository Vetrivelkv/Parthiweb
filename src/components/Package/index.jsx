import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./style.css";

const Package = () => {
  const [slideActive, setSlideActive] = useState(0);
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    //do something here when inView is true
    if (inView) {
      console.log("see whether");
      document.getElementById("scrollArea").classList.add("fromRightClass");
    } else {
      document.getElementById("scrollArea").classList.remove("fromRightClass");
    }
  }, [inView]);

  const nextSlide = () => {
    if (slideActive === 1) {
      setSlideActive(0);
    }
    if (slideActive === 0) {
      setSlideActive(slideActive + 1);
    }
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     if (slideActive === 1) {
  //       setSlideActive(0);
  //     }
  //     if (slideActive === 0) {
  //       setSlideActive(slideActive + 1);
  //     }
  //   }, 10000);
  // }, [slideActive]);

  return (
    <div id="scrollArea" ref={ref}>
      <div
        style={{
          color: "#F71C52",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Most flexible one page
      </div>
      <div className="packageInnerContainer1">
        <p style={{ fontSize: "1.3rem" }}>
          Very flexible pricing for your project.
        </p>
      </div>
      <div
        style={{
          marginTop: "2%",
          paddingBottom: "2%",
          textAlign: "center",
          width: "40%",
          marginLeft: "30%",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>

      <div
        className="pacakgeContainerHeader"
        //  onTouchStart={nextSlide}
      >
        <div className="headPackage">
          <p
            style={{
              display: `${slideActive === 0 ? "block" : "none"}`,
            }}
          >
            Wedding Photography
          </p>
          <p
            style={{
              display: `${slideActive === 1 ? "block" : "none"}`,
            }}
          >
            Secondary Photography
          </p>
        </div>
        <div id="test123">
          <div className="package_slider" onClick={nextSlide}>
            &lt;
          </div>
          <div className="package_slider_1" onClick={nextSlide}>
            v
          </div>

          <div
            className="pacakgeContainer"
            style={{
              display: `${slideActive === 0 ? "block" : "none"}`,
            }}
          >
            <div style={{ paddingTop: "4%" }}>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Start up</p>
            </div>
            <div>
              <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                click edit button to change this text. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                <sup style={{ fontSize: "20px" }}>$</sup>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>19</span>
                <sub>/ Month</sub>
              </p>
            </div>
            <div style={{ lineHeight: "10px", marginTop: "15%" }}>
              <p>Full Access</p>
              <p>Unlimited Bandwidth</p>
              <p>Email Account</p>
              <p>8 Free Forks Every Months</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <a
                className="btn btn-large btn-rounded btn-blue btn-hvr-pink mt-3"
                href="#!"
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid black",
                  marginBottom: "10%",
                }}
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
          <div
            className="pacakgeContainer"
            style={{
              display: `${slideActive === 0 ? "block" : "none"}`,
            }}
          >
            <div style={{ paddingTop: "4%" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#F71C52",
                }}
              >
                Standard
              </p>
            </div>
            <div>
              <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                click edit button to change this text. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                <sup style={{ fontSize: "20px" }}>$</sup>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>56</span>
                <sub>/ Month</sub>
              </p>
            </div>
            <div style={{ lineHeight: "10px", marginTop: "15%" }}>
              <p>Full Access</p>
              <p>Unlimited Bandwidth</p>
              <p>Email Account</p>
              <p>8 Free Forks Every Months</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <a
                className="btn btn-large btn-rounded btn-blue btn-hvr-pink mt-3"
                href="#!"
                style={{
                  background: "#F94C77",
                  color: "white",
                  border: "1px solid #F94C77",
                  marginBottom: "10%",
                }}
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
          <div
            className="pacakgeContainer"
            style={{
              display: `${slideActive === 0 ? "block" : "none"}`,
            }}
          >
            <div style={{ paddingTop: "4%" }}>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Premium</p>
            </div>
            <div>
              <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                click edit button to change this text. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                <sup style={{ fontSize: "20px" }}>$</sup>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>89</span>
                <sub>/ Month</sub>
              </p>
            </div>
            <div style={{ lineHeight: "10px", marginTop: "15%" }}>
              <p>Full Access</p>
              <p>Unlimited Bandwidth</p>
              <p>Email Account</p>
              <p>8 Free Forks Every Months</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <a
                className="btn btn-large btn-rounded btn-blue btn-hvr-pink mt-3"
                href="#!"
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid black",
                  marginBottom: "10%",
                }}
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

          {/* secondSlider */}
          <div
            className="pacakgeContainer"
            style={{
              display: `${slideActive === 1 ? "block" : "none"}`,
            }}
          >
            <div style={{ paddingTop: "4%" }}>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Premium</p>
            </div>
            <div>
              <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                click edit button to change this text. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                <sup style={{ fontSize: "20px" }}>$</sup>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>89</span>
                <sub>/ Month</sub>
              </p>
            </div>
            <div style={{ lineHeight: "10px", marginTop: "15%" }}>
              <p>Full Access</p>
              <p>Unlimited Bandwidth</p>
              <p>Email Account</p>
              <p>8 Free Forks Every Months</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <a
                className="btn btn-large btn-rounded btn-blue btn-hvr-pink mt-3"
                href="#!"
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid black",
                  marginBottom: "10%",
                }}
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
          <div
            className="pacakgeContainer"
            style={{
              display: `${slideActive === 1 ? "block" : "none"}`,
            }}
          >
            <div style={{ paddingTop: "4%" }}>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Premium</p>
            </div>
            <div>
              <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                click edit button to change this text. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                <sup style={{ fontSize: "20px" }}>$</sup>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>89</span>
                <sub>/ Month</sub>
              </p>
            </div>
            <div style={{ lineHeight: "10px", marginTop: "15%" }}>
              <p>Full Access</p>
              <p>Unlimited Bandwidth</p>
              <p>Email Account</p>
              <p>8 Free Forks Every Months</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <a
                className="btn btn-large btn-rounded btn-blue btn-hvr-pink mt-3"
                href="#!"
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid black",
                  marginBottom: "10%",
                }}
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
          <div
            className="pacakgeContainer"
            style={{
              display: `${slideActive === 1 ? "block" : "none"}`,
            }}
          >
            <div style={{ paddingTop: "4%" }}>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Premium</p>
            </div>
            <div>
              <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                click edit button to change this text. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                <sup style={{ fontSize: "20px" }}>$</sup>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>89</span>
                <sub>/ Month</sub>
              </p>
            </div>
            <div style={{ lineHeight: "10px", marginTop: "15%" }}>
              <p>Full Access</p>
              <p>Unlimited Bandwidth</p>
              <p>Email Account</p>
              <p>8 Free Forks Every Months</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <a
                className="btn btn-large btn-rounded btn-blue btn-hvr-pink mt-3"
                href="#!"
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid black",
                  marginBottom: "10%",
                }}
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
          {/* secondSlider */}
          <div className="package_slider" onClick={nextSlide}>
            &gt;
          </div>
          <div className="package_slider_2" onClick={nextSlide}>
            v
          </div>
        </div>
      </div>
    </div>
  );
};
export default Package;
