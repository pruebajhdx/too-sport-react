import React from "react";
import { Swiper, SwiperSlide } from "framework7-react";

const data = [
  {
    type: "Futbol",
    iconColor: "bg-color-orange",
    url: "/img/user2.png",
    style: "/img/user2.png",
    detail: "Eventos del día.",
  },
  {
    type: "Futbol",
    iconColor: "bg-color-deeporange",
    url: "/img/user3.png",
    style: "background: url(./img/user2.png)",
    detail: "Partidos de futbol, en vivo. Todos los partidos del día.",
  },
  {
    type: "Futbol",
    iconColor: "bg-color-pink",
    url: "/img/user4.png",
    style: "background: url(./img/user2.png)",
    detail: "Partidos de futbol, en vivo. Todos los partidos del día.",
  },
  {
    type: "Futbol",
    iconColor: "bg-color-red",
    url: "/img/user5.png",
    style: "background: url(./img/user2.png)",
    detail: "Partidos de futbol, en vivo. Todos los partidos del día.",
  },
];

const slideSize = {
  320: {
    slidesPerView: "2.1",
  },
  400: {
    slidesPerView: "2.5",
  },
  768: {
    slidesPerView: "4.5",
  },
  1024: {
    slidesPerView: "5.5",
  },
  600: {
    slidesPerView: "3.2",
  },
  240: {
    slidesPerView: "1.1",
  },
  834: {
    slidesPerView: "4.5",
  },
  1920: {
    slidesPerView: "6.3",
  },
  360: {
    slidesPerView: "2.1",
  },
  576: {
    slidesPerView: "3.2",
  },
};
const DescriptionTitle = () => {
  return (
    <div>
      <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
        <div>
          <div className="block-title-medium no-margin block-title text-semibold">
            Eventos del día
          </div>
          <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
            Número de transmisiones en vivo
          </div>
        </div>
        <div className="newsman-badge">
          <a href="!" className="badge bg-color-white text-color-black">
            VER TODO
          </a>
        </div>
      </div>
    </div>
  );
};

const ShowSlider = (data) => {
  return (
    <div>
      <div className="swiper-slide">
        <div className="author-card">
          <div
            className={`author-card-img ${data.props.iconColor} margin-bottom padding-half`}
            style={{ background: `url(${data.props.url})` }}
          >
            <div className="newsman-badge">
              <a href="!" className="badge bg-color-white text-color-black">
                FOLLOW ME
              </a>
            </div>
          </div>
          <div className="post-author">
            <div className="post-author-infos">
              <span className="post-author-name display-block text-semibold">
                <a href="/profile/">Megan Stelan</a>
              </span>
              <span className="post-author-extra newsman-opacity">
                Data Science lover
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Authors = () => {
  return (
    <div className="newsman-block">
      <DescriptionTitle />
      <div className="newsman-block-content">
        <div className="swiper-container list-posts-full-bg-swipper">
          <Swiper loop={true} spaceBetween={20} breakpoints={slideSize}>
            {data.map((data, idx) => (
              <SwiperSlide key={idx}>
                <ShowSlider props={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Authors;
