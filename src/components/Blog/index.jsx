const Blog = () => {
  return (
    <div>
      {/* <!--Blog Start--> */}
      <section class="bg-light" id="blog">
        <div class="container">
          {/* <!--Row--> */}
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="heading-area mx-570 pb-lg-5 mb-5">
                <span class="sub-title">We are megaone company</span>
                <h2 class="title mb-0">
                  Our{" "}
                  <span class="alt-color js-rotating">
                    latest blogs,recent news
                  </span>{" "}
                  will keep everyone updated
                </h2>
              </div>
            </div>
          </div>
          {/* <!--Row--> */}
          <div class="row wow fadeInUp">
            {/* <!--News Item--> */}
            <div class="col-lg-4">
              <div class="news-item">
                <img
                  alt="ime"
                  class="news-img"
                  src="agency/img/blog-news-1.jpg"
                />
                <div class="news-text-box">
                  <span class="date main-color">October 29, 2020</span>
                  <a href="agency/blog-list.html">
                    <h4 class="news-title">Web design is fun</h4>
                  </a>
                  <p class="para">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum
                    dolor sit am...
                  </p>
                  <a
                    class="author d-flex align-items-center"
                    href="#!"
                  >
                    <img
                      alt="imfd"
                      class="author-img bg-blue"
                      src="agency/img/avatar-1.png"
                    />
                    <h5 class="author-name">Hena Sword</h5>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--News Item--> */}
            <div class="col-lg-4">
              <div class="news-item">
                <img
                  alt="ima"
                  class="news-img"
                  src="agency/img/blog-news-2.jpg"
                />
                <div class="news-text-box">
                  <span class="date main-color">October 29, 2020</span>
                  <a href="agency/blog-list.html">
                    <h4 class="news-title">Future of websites</h4>
                  </a>
                  <p class="para">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum
                    dolor sit am...
                  </p>
                  <a
                    class="author d-flex align-items-center"
                    href="#!"
                  >
                    <img
                      alt="im"
                      class="author-img bg-purple"
                      src="agency/img/avatar-2.png"
                    />
                    <h5 class="author-name">David Villas</h5>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--News Item--> */}
            <div class="col-lg-4">
              <div class="news-item">
                <img
                  alt="ima"
                  class="news-img"
                  src="agency/img/blog-news-3.jpg"
                />
                <div class="news-text-box">
                  <span class="date main-col2or">October 29, 2020</span>
                  <a href="#!">
                    <h4 class="news-title">Digital marketing</h4>
                  </a>
                  <p class="para">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum
                    dolor sit am...
                  </p>
                  <a
                    class="author d-flex align-items-center"
                    href="#!"
                  >
                    <img
                      alt="ima"
                      class="author-img bg-pink"
                      src="agency/img/avatar-5.png"
                    />
                    <h5 class="author-name">Jhon Walker</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Blog End--> */}
    </div>
  );
};
export default Blog;
