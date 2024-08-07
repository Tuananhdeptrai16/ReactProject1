import { useRef } from "react";
import Slider from "react-slick";
import { Slide } from "react-slideshow-image";

export const Reviews = () => {
  const infoReviews = [
    {
      avatar: `${process.env.PUBLIC_URL}/images/reviews/user1.jpg`,
      name: `Truong Tuan Anh`,
      info: `Student of Web Design`,
      review:
        "Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills Ive learned ",
    },
    {
      avatar: `${process.env.PUBLIC_URL}/images/reviews/user2.jpg`,
      name: `Nguyen Thi Hoa `,
      info: `Student of JavaScript `,
      review:
        "Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills Ive learned ",
    },
    {
      avatar: `${process.env.PUBLIC_URL}/images/reviews/user3.jpg`,
      name: `Truong Tuan Bo `,
      info: `Student of WebDesign`,
      review:
        "Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills Ive learned ",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Hiển thị 3 sản phẩm một lúc
    slidesToScroll: 1,
    autoplay: true, // Bật tính năng tự động trượt
    autoplaySpeed: 2000,
    arrows: false, // Disable default arrowsws: false, // Disable default arrows
  };
  return (
    <div className="reviews__wrap">
      <div className="container">
        <Slider {...settings}>
          {infoReviews.map((item) => {
            return (
              <div id="Reviews" key={item.name} className="reviews">
                <div className="reviews__subWraps">
                  <div className="reviews__info ">
                    <img src={item.avatar} alt="" className="reviews__avatar" />
                    <p className="reviews__name">{item.name}</p>
                    <p className="reviews__infoClass">{item.info}</p>
                  </div>
                  <div className="reviews__content ">
                    <div className="reviews__textContent">
                      <svg
                        className="reviews__quotes"
                        width="30"
                        height="28"
                        viewBox="0 0 30 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9168 1.23505V6.26199C12.9168 6.94407 12.3663 7.49652 11.6875 7.49652C9.26544 7.49652 7.94779 9.99114 7.76491 14.9155H11.6875C12.3662 14.9155 12.9168 15.4688 12.9168 16.1501V26.7647C12.9168 27.4465 12.3663 27.999 11.6875 27.999H1.22938C0.550795 27.999 1.90735e-06 27.4459 1.90735e-06 26.7647V16.15C1.90735e-06 13.7896 0.237282 11.6235 0.703081 9.71055C1.1816 7.74949 1.91613 6.035 2.8858 4.61422C3.88306 3.15417 5.13161 2.00845 6.59457 1.21054C8.06863 0.407543 9.78211 0 11.688 0C12.3662 0.000516891 12.9168 0.553486 12.9168 1.23505ZM28.771 7.49696C29.4496 7.49696 30 6.94407 30 6.26294V1.23497C30 0.553488 29.4496 0.000951767 28.771 0.000951767C26.866 0.000951767 25.1517 0.408579 23.6785 1.21149C22.2148 2.00931 20.9664 3.15408 19.9693 4.61517C18.999 6.03595 18.2645 7.75052 17.786 9.71254C17.32 11.6255 17.0832 13.7917 17.0832 16.151V26.7657C17.0832 27.4476 17.6341 28 18.3125 28H28.771C29.4496 28 30 27.447 30 26.7657V16.151C30 15.4693 29.4496 14.9165 28.771 14.9165H24.9035C25.0841 9.99165 26.3828 7.49696 28.771 7.49696Z"
                          fill="#634700"
                        />
                      </svg>
                      {item.review}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
