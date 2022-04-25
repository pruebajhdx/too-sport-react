import React from "react";
import { Swiper, SwiperSlide } from "framework7-react";
import  $$ from "dom7"; //TODO testing library


const data = [
  {
    color: "bg-color-deeppurple margin-bottom padding-half",
    type: "Futbol",
    iconColor: "bg-color-orange",
    url: "/img/user2.png",
    slide: "/img/01.jpg",
    style:"/img/user2.png",
    detail: "Eventos del día.",
  },
  {
    color: "author-card-img bg-color-deeporange margin-bottom padding-half",
    type: "Futbol",
    iconColor: "bg-color-orange",
    url: "/img/user2.png",
    slide: "/img/01.jpg",
    style:"background: url(./img/user2.png)",
    detail: "Partidos de futbol, en vivo. Todos los partidos del día.",
  },
  {
    color: "author-card-img bg-color-pink margin-bottom padding-half",
    type: "Futbol",
    iconColor: "bg-color-orange",
    url: "/img/user2.png",
    slide: "/img/01.jpg",
    style:"background: url(./img/user2.png)",
    detail: "Partidos de futbol, en vivo. Todos los partidos del día.",
  },
  {
    color: "author-card-img bg-color-red margin-bottom padding-half",
    type: "Futbol",
    iconColor: "bg-color-orange",
    url: "/img/user2.png",
    slide: "/img/01.jpg",
    style:"background: url(./img/user2.png)",
    detail: "Partidos de futbol, en vivo. Todos los partidos del día.",
  },
];
const slideSize = {
  320: {
    slidesPerView: "1.1",
  },
  400: {
    slidesPerView: "1.4",
  },
  768: {
    slidesPerView: "2.5",
  },
  1024: {
    slidesPerView: "3.5",
  },
  600: {
    slidesPerView: "2.2",
  },
  240: {
    slidesPerView: "1.1",
  },
  834: {
    slidesPerView: "3.2",
  },
  1920: {
    slidesPerView: "6.3",
  },
  360: {
    slidesPerView: "1.2",
  },
  576: {
    slidesPerView: "2.2",
  },
};
const DescriptionTitle = () =>{

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
}

const ShowSlider = () => {
  return(
    <div>
      <div className="swiper-slide">
         <div className="author-card">

           <div className="author-card-img" data-color= {data.color} 
                style={data.style}>
               <div className="newsman-badge">
                 <a href="!" className={data.color}>
                  FOLLOW ME
                 </a>
                </div>
           </div>

            <div className="post-author">
              <div className="post-author-infos">
                <span className="post-author-name display-block text-semibold">
                   <a href="/profile/">
                    Megan Stelan
                   </a>
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
}

const Authors = () => {
  return (
    <div className="newsman-block">
      <DescriptionTitle />
      <div className="newsman-block-content">
        <div className="swiper-container list-posts-full-bg-swipper">
        <Swiper
            loop={true}
            spaceBetween={20}
            breakpoints={slideSize}
            onTransitionEnd={() => {
              const obj ="#root > div > div.newsman-block > div.newsman-block-content > div > div > div";
              let rgba = $$(obj)
                .find(".swiper-slide-active")
                .children(".swiper-wrapper")
                .children(".swiper-slide")
                .attr("data-color");
              $$(".newsman-page-gradient").css("background-color", rgba);
            }}>
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