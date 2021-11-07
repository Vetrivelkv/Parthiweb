import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const LatestBlogs = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });
  const [slidercontent, setSliderContent] = useState([]);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    //do something here when inView is true
    if (inView) {
      document
        .getElementById("latestBlogHeader")
        .classList.add("fadingInClass");
      document
        .getElementById("latestBlogHeader2")
        .classList.add("fadingInClass");
      setTimeout(() => {
        document
          .getElementById("latestBlogHeader")
          .classList.remove("fadingInClass");
      }, 800);
    } else {
      if (document.getElementById("latestBlogHeader")) {
        document
          .getElementById("latestBlogHeader")
          .classList.remove("fadingInClass");
      }
      if (document.getElementById("latestBlogHeader2")) {
        document
          .getElementById("latestBlogHeader2")
          .classList.remove("fadingInClass");
      }
    }
  }, [inView]);
  useEffect(() => {
    setSliderContent([
      {
        title1: "Wedding",
        title2: "Photography",
        content:
          " It is a profound honour as a photographer to witness two people falling in love. We have special packages tocapture to capture the perfect moment. If you require  additional coverage for other wedding or pre-wedding events, we have hourly rates for the other Wedding Ceremonies. Contact us for more info.",
      },
      {
        title1: "Corporate",
        title2: "Photography",
        content:
          "The best thing about a picture is that it never changes, even when the people in it do. Corporate photography prices are largely dependent on the content and context of the shoot. As there can be many variable to a photo shoot, please be as thorough as possible when requesting a quote, including dates, times and subjects. To help with the quoting process, Contact us for more info.",
      },
      {
        title1: "School /",
        title2: "College Events",
        content:
          "There is one thing the photograph must contain, the humanity of the moment. Events are the most unforgetable moments and that needs to be captured at the right time with a smile. Event coverage prices are dependent on hourly rates Please be as thorough as possible when requesting a quote, including dates, times and subjects.",
      },
      {
        title1: "Industry",
        title2: "Photography",
        content:
          "The camera is an instrument that teaches people how to see without a camera. We have special packages to snap all your machinery and the work around, where that photograph gives a multiple business. Contact us for more info.",
      },
    ]);
  }, []);

  const increaseSlide = () => {
    if (slideCount < 3) {
      const count = slideCount + 1;
      setSlideCount(count);
    }
    if (slideCount === 3) {
      setSlideCount(0);
    }
  };

  const decreaseSlide = () => {
    if (slideCount !== 0) {
      const count = slideCount - 1;
      setSlideCount(count);
    }
    if (slideCount === 0) {
      setSlideCount(3);
    }
  };
  // useEffect(() => {
  //   setInterval(() => {
  //     if (slideCount < 3) {
  //       const count = slideCount + 1;
  //       setSlideCount(count);
  //     }
  //     if (slideCount === 3) {
  //       setSlideCount(0);
  //     }
  //   }, 15000);
  // }, [slideCount]);

  return (
    <div>
      {slidercontent.length > 0 ? (
        <div ref={ref}>
          <section className="lastest-blog" id="lastest-blog">
            <svg
              className="separator__svg"
              id="blog-header-svg"
              width="100%"
              height="200"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="#fff"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 100 100 V 10 L 0 100" />
              <path d="M 30 73 L 100 18 V 10 Z" fill="#fff" stroke-width="0" />
            </svg>
            <div>
              <div className="container position-relative">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-6">
                    <div className="blog-content slider-detail">
                      <div
                        className="slider-slide"
                        id="latestBlogHeader"
                        onTouchStart={increaseSlide}
                      >
                        <h1>
                          <span>{slidercontent[slideCount].title1} </span>{" "}
                          {slidercontent[slideCount].title2}{" "}
                        </h1>
                        <p>{slidercontent[slideCount].content}</p>
                        <a
                          href="#!"
                          className="btn btn-large btn-rounded white-tran-yellow-btn"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-6">
                    <div className="blog-img">
                      <img
                        src="digital-agency/img/blog-mokeup.png"
                        alt="1"
                        id="latestBlogHeader2"
                      />
                      <div className="slider-img"></div>
                    </div>
                  </div>
                  <a
                    className="circle"
                    id="blog-circle-left"
                    href="#!"
                    onClick={decreaseSlide}
                  >
                    <i className="lni lni-chevron-left"></i>
                  </a>
                  <a
                    className="circle"
                    id="blog-circle-right"
                    href="#!"
                    onClick={increaseSlide}
                  >
                    <i className="lni lni-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <svg
              className="separator__svg"
              id="blog-foot-svg"
              width="100%"
              height="200"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="#fff"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 100 100 V 10 L 0 100" />
              <path d="M 30 73 L 100 18 V 10 Z" fill="#fff" stroke-width="0" />
            </svg>
            <img
              src={window.location.origin + "/digital-agency/img/pot-2.png"}
              alt="plant"
              className="pot-2 wow slideInLeft"
              data-wow-delay=".1s"
            />
          </section>
        </div>
      ) : null}
    </div>
  );
};
export default LatestBlogs;
