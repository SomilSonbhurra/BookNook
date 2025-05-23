import React, { useEffect, useRef, } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'

const slidesData = [
  {
    imgSrc: "/img/ramayan.jpeg",
    title: "Ramayan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate!",
    categories: ["Travel", "History"]
  },
  {
    imgSrc: "/img/naruto.avif",
    title: "Naruto",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate!",
    categories: ["Travel", "History"]
  },
  {
    imgSrc: "/img/ramayan.jpeg",
    title: "Ramayan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate!",
    categories: ["Travel", "History"]
  },
  {
    imgSrc: "/img/ramayan.jpeg",
    title: "Ramayan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate!",
    categories: ["Travel", "History"]
  },
  {
    imgSrc: "/img/ramayan.jpeg",
    title: "Ramayan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate!",
    categories: ["Travel", "History"]
  },
  {
    imgSrc: "/img/ramayan.jpeg",
    title: "Ramayan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate!",
    categories: ["Travel", "History"]
  },
  {
    imgSrc: "/img/ramayan.jpeg",
    title: "Ramayan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate!",
    categories: ["Travel", "History"]
  },
]



const Home = () => {
  const swiperWrapedRef = useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;

    if (swiperWrapedRef.current) {
      swiperWrapedRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
            ? "-50px"
            : screenWidth <= 800
              ? "-100px"
              : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);


  return (
    <div className="bg">

      {/* navbar */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary-update">
        <div className="container-fluid">
          <a className="navbar-brand-update" href="#">BookNook</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link-update" aria-current="page" href="/signup">Signup</a>
              </li>
              <li className="nav-item">
                <a className="nav-link-update" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Signup */}
      <div className="mybtn">
        <a href="/signup" className="link"> <button className="signup-btn">Signup now</button>  </a>
      </div>

      {/* swiper */}
      <main>
        <div className="container">
          <Swiper
            modules={[Pagination]}
            grabCursor
            initialSlide={2}
            centeredSlides
            slidesPerView="auto"
            speed={800}
            slideToClickedSlide
            pagination={{ clickable: true }}
            breakpoints={{
              320: { spaceBetween: 40 },
              320: { spaceBetween: 30 },
              320: { spaceBetween: 20 }
            }}

            onSwiper={(swiper) => {
              swiperWrapedRef.current = swiper.wrapperEl;
            }}>
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide.imgSrc} alt={slide.title} />
                <div className="title">
                  <h1>{slide.title}</h1>
                </div>
                <div className="content">
                  <div className="text-box">
                    <p>{slide.description}</p>
                  </div>

                  <div className="footer">
                    <div className="category">
                      {slide.categories.map((category, idx) => (
                        <span key={idx} style={{ "--i": idx + 1 }}>
                          {category}
                        </span>
                      ))}
                    </div>
                    <button className="footer-btn">
                      <span className="label">More..</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>

    </div>
  )
}

export default Home;