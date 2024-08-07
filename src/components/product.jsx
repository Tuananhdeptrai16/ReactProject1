import React, { useRef } from "react";
import Slider from "react-slick";

export const Product = () => {
  const products = [
    {
      img: `${process.env.PUBLIC_URL}/images/product/img1.jpg`,
      title: "Basic web design",
      rating: "4.5",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      Price: "$120.75",
      contentButton: "Book Now",
    },
    {
      img: `${process.env.PUBLIC_URL}/images/product/img2.jpg`,
      title: "UI/UX design",
      rating: "4.5",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      Price: "$120.75",
      contentButton: "Book Now",
    },
    {
      img: `${process.env.PUBLIC_URL}/images/product/img3.jpg`,
      title: "Web App design",
      rating: "4.5",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      Price: "$120.75",
      contentButton: "Book Now",
    },
    {
      img: `${process.env.PUBLIC_URL}/images/product/img4.jpg`,
      title: "JavaScript Newbie",
      rating: "4.5",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      Price: "$120.75",
      contentButton: "Book Now",
    },
    {
      img: `${process.env.PUBLIC_URL}/images/product/img5.jpg`,
      title: "React Js Course",
      rating: "4.5",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      Price: "$120.75",
      contentButton: "Book Now",
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Hiển thị 3 sản phẩm một lúc
    slidesToScroll: 1,
    arrows: false, // Disable default arrowsws: false, // Disable default arrows
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="container">
      <div id="course" className="product">
        <div className="product__content">
          <div className="product__content-text">
            <h2 className="product__heading">Our popular courses</h2>
            <p className="product__desc">
              Build new skills with new trendy courses and shine for the next
              future career.
            </p>
          </div>
          <div className="product__content--btn">
            <button
              onClick={handlePrev}
              className="product__button product__button--left"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 1L1 7L7 13" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="product__button product__button--right"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L7 7L1 13" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {products.map((item) => (
            <div key={item.title} className="row  product__list">
              <div className="col">
                <div className="product__item">
                  <div className="product__img">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="product__image"
                    />
                  </div>
                  <div className="product__popularContent">
                    <div className="product__popular">
                      <h2 className="product__popular--heading">
                        {item.title}
                      </h2>
                      <div className="product__rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                        >
                          <path
                            d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                            fill="#FEA31B"
                          />
                        </svg>
                        <span className="product__rating--number">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                    <p className="product__popular--desc">{item.desc}</p>
                    <div className="product__info">
                      <span className="product__price">{item.Price}</span>
                      <button className="product__popular--button">
                        {item.contentButton}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
