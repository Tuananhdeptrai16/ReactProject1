import logo from "../assets/img/logo.svg";
import herroImage from "../assets/img/herroimg.png";
import IconWatch from "../assets/img/watchIcon.svg";
import iconDoc from "../assets/img/iconDoc.svg";
import iconDev from "../assets/img/iconDev.svg";
import iconNoctice from "../assets/img/iconNotice.svg";
import { useState } from "react";

export const Header = () => {
  const nav = [
    {
      link: "./",
      id: 1,
      name: "Home",
    },
    {
      link: "#course",
      id: "2",
      name: "Courses",
    },
    {
      link: "#Pricing",
      id: 3,
      name: "Pricing",
    },
    {
      link: "#Reviews",
      id: 4,
      name: "Reviews",
    },
  ];
  const cards = [
    {
      id: "1",
      icon: iconDoc,
      title: "UI/UX Design",
      desc: "20 Courses",
    },
    {
      id: "2",
      icon: iconDev,
      title: "Development",
      desc: "20 Courses",
    },
    {
      id: "3",
      icon: iconNoctice,
      title: "Marketing",
      desc: "20 Courses",
    },
  ];
  const [clickedIndex, setClickedIndex] = useState(null);
  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div className="header-wrap">
      <div className="container">
        <header className="header">
          <div className="header__left">
            <a href="/">
              <img src={logo} alt="" className="header__logo" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              {nav.map((nameItem, index) => {
                return (
                  <li key={index}>
                    <a
                      href={nameItem.link}
                      className={`header__link ${
                        clickedIndex === index ? "header__link--after" : ``
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      {nameItem.name}
                    </a>
                  </li>
                );
              })}
              <a href="#!" className="header__login">
                Sign Up
              </a>
            </ul>
          </nav>
        </header>
        <div className="hero">
          <div className="row">
            <div className="col-7">
              <div className="hero__img-wrap">
                <img src={herroImage} alt="" className="hero__img" />
                <div className="card">
                  <div className="card__wrap">
                    {cards.map((item) => {
                      return (
                        <div className="card__item" key={item.id}>
                          <img
                            src={item.icon}
                            alt=""
                            className="card__item--img"
                          />
                          <div className="card__content">
                            <p className="card__desc">{item.desc}</p>
                            <p className="card__title">{item.title}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="hero__content">
                <h1 className="hero__heading">
                  Learn without limits and spread knowledge.
                </h1>
                <div className="hero__desc">
                  Build new skills for that “this is my year” feeling with
                  courses, certificates, and degrees from world-class
                  universities and companies.
                </div>

                <div className="hero__btn">
                  <a href="" className="hero__link">
                    See courses
                  </a>
                  <div className="hero__watch">
                    <img
                      src={IconWatch}
                      alt=""
                      className="hero__watch--playVideo"
                    />
                    <a href="" className="hero__watch--link">
                      Watch Video
                    </a>
                  </div>
                </div>
                <div className="hero__rating">
                  <div className="hero__rating--desc">Recent engagement</div>
                  <div className="hero__rating--info">
                    <div className="hero__rating--content">
                      <p className="hero__text">
                        <span className="hero__span">50K</span>Students
                      </p>
                      <p className="hero__text">
                        <span className="hero__span">70+</span>Courses
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
  );
};
