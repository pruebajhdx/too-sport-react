import React from "react";

import { Swiper, SwiperSlide } from "framework7-react";
import $$ from "dom7"; //TODO testing library
import { Link } from "react-router-dom";

const data = [
    {
        color: "rgb(11, 12, 62)",
        type: "Futbol",
        iconColor: "bg-color-orange",
        url: "/img/user1.png",
        slide: "/img/01.jpg",
        route: "/football/leagues",
        detail: "Partidos de futbol, en vivo. Todos los partidos del día.",
    },
    {
        color: "rgb(205 39 73)",
        type: "F1",
        iconColor: "bg-color-blue",
        url: "/img/user3.png",
        slide: "/img/02.jpg",
        route: "/f1",
        detail: "Vive emocionantes carreras de F1 en vivo y sus repeticiones.",
    },
    {
        color: "#85a0c0",
        type: "Motorsport",
        iconColor: "bg-color-red",
        url: "/img/user3.png",
        slide: "/img/03.jpg",
        route: "/motors",
        detail: "Carreras de todos los eventos motorsport en vivo al día.",
    },
    {
        color: "#bcb58b",
        type: "UFC",
        iconColor: "bg-color-black",
        url: "/img/user4.png",
        slide: "/img/04.jpg",
        route: "/",
        detail: "Peleas de la UFC y MMA en vivo, eventos del día.",
    },
    {
        color: "rgb(2 36 54)",
        type: "NBA",
        iconColor: "bg-color-purple",
        url: "/img/user5.png",
        slide: "/img/24.jpg",
        route: "/",
        detail: "Partidos de la NBA en vivo, eventos del día.",
    },
    {
        color: "rgb(2 36 54)",
        type: "Boxeo",
        iconColor: "bg-color-purple",
        url: "/img/user5.png",
        slide: "/img/05.jpg",
        route: "/boxing",
        detail: "Peleas del mejor boxeo en vivo, eventos del día.",
    },
    {
        color: "#e44045",
        type: "MLB",
        iconColor: "bg-color-teal",
        url: "/img/user6.png",
        slide: "/img/06.jpg",
        route: "/mlb",
        detail: "Vive la MLB en vivo con los eventos del día",
    },
   /*  {
        color: "#7a5e75",
        type: "Canales",
        iconColor: "bg-color-lime",
        url: "/img/user7.png",
        slide: "/img/07.jpg",
        route: "/channels",
        detail: "Canales en vivo, listas IPTV en HD y en SD",
    }, */
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
    1300: {
        slidesPerView: "4.5",
    },
    1200: {
        slidesPerView: "4.2",
    },
    1130: {
        slidesPerView: "3.5",
    },
    1400: {
        slidesPerView: "4.5",
    },
    1800: {
        slidesPerView: "5.5",
    },
    1500: {
        slidesPerView: "5.0",
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

const DescriptionTitle = () => {
    return (
        <div>
            <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
                <div>
                    <div className="block-title-medium no-margin block-title text-semibold">
                        Instala nuestra <b>APP</b>
                    </div>
                    <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
                        Eventos en vivo
                    </div>
                </div>
                <div className="newsman-badge">
                    <a
                        href="!"
                        className="badge bg-color-white text-color-black"
                    >
                        CONTENIDO
                    </a>
                </div>
            </div>
        </div>
    );
};

const ShowSlide = (data) => {
    return (
        <div className="swiper-wrapper">
            <div className="swiper-slide" data-color={data.props.color}>
                <div className="post-full-bg">
                    <div className="post-author display-flex align-items-center">
                        <div
                            className={
                                "post-author-img " +
                                data.props.iconColor +
                                " newsman-object-fit"
                            }
                        >
                            <Link to={data.props.route} className="external">
                                <img src={data.props.url} alt="user1" />
                            </Link>
                        </div>
                        <div className="post-author-infos margin-left-half">
                            <span className="post-author-name display-block text-semibold">
                                <a href="/profile/">{data.props.type}</a>
                            </span>
                            <span className="post-author-extra newsman-opacity">
                                En vivo
                            </span>
                        </div>
                    </div>
                    <div className="post-content margin-top display-flex flex-direction-column justify-content-flex-end newsman-object-fit">
                        <img src={data.props.slide} alt="1" />
                        <div className="post-title">
                            <h2 className="no-margin-bottom">
                                <Link
                                    to={data.props.route}
                                    className="external"
                                >
                                    {data.props.detail}
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TodayNew = () => {
    return (
        <div className="newsman-block">
            <div className="newsman-page-gradient"></div>
            <DescriptionTitle />
            <div className="newsman-block-content">
                <div className="swiper-container list-posts-full-bg-swipper">
                    <Swiper
                        loop={true}
                        spaceBetween={20}
                        breakpoints={slideSize}
                        onTransitionEnd={() => {
                            const obj =
                                "#root > div > div.newsman-block > div.newsman-block-content > div > div > div";
                            let rgba = $$(obj)
                                .find(".swiper-slide-active")
                                .children(".swiper-wrapper")
                                .children(".swiper-slide")
                                .attr("data-color");
                            $$(".newsman-page-gradient").css(
                                "background-color",
                                rgba
                            );
                        }}
                    >
                        {data.map((data, idx) => (
                            <SwiperSlide key={idx}>
                                <ShowSlide props={data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TodayNew;
