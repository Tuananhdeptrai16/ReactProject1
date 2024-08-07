import Slider from "react-slick";

export const Blog = () => {
  const blogs = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/images/blog/item1.png`,
      date: "21 November 2021",
      heading: "How to become a pro web designer in 2022 and get remot job?",
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/images/blog/item2.png`,
      date: "21 November 2021",
      heading: "How to become a pro web designer in 2022 and get remot job?",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/images/blog/item3.png`,
      date: "21 November 2021",
      heading: "How to become a pro web designer in 2022 and get remot job?",
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/images/blog/item3.png`,
      date: "21 November 2021",
      heading: "How to become a pro web designer in 2022 and get remot job?",
    },
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/images/blog/item3.png`,
      date: "21 November 2021",
      heading: "How to become a pro web designer in 2022 and get remot job?",
    },
    {
      id: 6,
      img: `${process.env.PUBLIC_URL}/images/blog/item3.png`,
      date: "21 November 2021",
      heading: "How to become a pro web designer in 2022 and get remot job?",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Hiển thị 3 sản phẩm một lúc
    slidesToScroll: 1,
    arrows: false, // Disable default arrowsws: false, // Disable default arrows
    autoplay: true, // Bật tính năng tự động trượt
    autoplaySpeed: 2000,
  };

  return (
    <div className="blog">
      <div className="container">
        <div className="blog__content">
          <h1 className="blog__heading">Our blog</h1>
          <p className="blog__desc">
            Read our regular travel blog and know the latest update of tour and
            travel
          </p>

          <Slider {...settings}>
            {blogs.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{ flexWrap: "nowrap" }}
                  className="row  blog__list"
                >
                  <div className="col">
                    <div className="blog__item">
                      <img src={item.img} alt="img" className="blog__img" />
                      <div className="blog__itemContent">
                        <p className="blog__date">{item.date}</p>
                        <div className="blog__seperate"></div>
                        <h3 className="blog__item--heading">{item.heading}</h3>
                        <a href="#!" className="blog__link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
