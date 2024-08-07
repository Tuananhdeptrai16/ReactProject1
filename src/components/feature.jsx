export const Feature = () => {
  return (
    <div className="container">
      <div className="features">
        <div className="row">
          <div className="col-6">
            <figure className="features__img-Wrap">
              <img
                src={`${process.env.PUBLIC_URL}/images/features/slide1.png`}
                alt=""
                className="features__imgLeft"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/features/slide2.png`}
                alt=""
                className="features__imgRight"
              />
            </figure>
          </div>
          <div className="col-5 offset-1">
            <h1 className="features__heading">
              Learner outcomes through our awesome platform
            </h1>
            <p className="features__desc">
              87% of people learning for professional development report career
              benefits like getting a promotion, a raise, or starting a new
              career.
            </p>
            <p className="features__report">Lesson Impact Report (2022)</p>
            <div className="features__btn">
              <a href="#!" className="features__link">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h1 className="features__heading">
              Take the next step toward your personal and professional goals
              with Lesson.
            </h1>
            <p className="features__desc">
              Take the next step toward. Join now to receive personalized and
              more recommendations from the full Coursera catalog.
            </p>
            <div className="features__btn">
              <a href="#!" className="features__link">
                Join Now
              </a>
            </div>
          </div>
          <div className="col-5 offset-1">
            <figure className="features__img-Wrap">
              <img
                src={`${process.env.PUBLIC_URL}/images/features/slide3.png`}
                alt=""
                className="features__imgCenter"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
