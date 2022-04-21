
import React from 'react';

function TodayNew() {
  
 
  const data = [
    {
      color: "rgb(214, 63, 168)",
      type: "test",
      url: "./img/01.jpg",
      detail: "Partidos de futbol, en vivo. Todos los partidos del día",
    },
    {
      color: "rgb(214, 63, 168)",
      type: "F1",
      url: "./img/0.jpg",
      detail: "Partidos de futbol, en vivo. Todos los partidos del día",
    },
    {
      color: "rgb(214, 63, 168)",
      type: "F1",
      url: "./img/0.jpg",
      detail: "Partidos de futbol, en vivo. Todos los partidos del día",
    },
    {
      color: "rgb(214, 63, 168)",
      type: "F1",
      url: "./img/0.jpg",
      detail: "Partidos de futbol, en vivo. Todos los partidos del día",
    },
  ];

  return (
    <div className="newsman-block">
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
          <a href="!" className="badge bg-color-white text-color-black">
            SEE ALL
          </a>
        </div>
      </div>
      <div className="newsman-block-content">
        <div className="swiper-container list-posts-full-bg-swipper">
            {data.map(data =>
                <div  key= "{data}" className="swiper-wrapper">
                <div className="swiper-slide" data-color="#e44045">
                  <div className="post-full-bg">
                    <div className="post-author display-flex align-items-center">
                      <div className="post-author-img bg-color-orange newsman-object-fit">
                        <img src={data.url} alt="user1" />
                      </div>
                      <div className="post-author-infos margin-left-half">
                        <span className="post-author-name display-block text-semibold">
                          <a href="/profile/">{data.type}</a>
                        </span>
                        <span className="post-author-extra newsman-opacity">
                          En vivo
                        </span>
                      </div>
                    </div>
                    <div className="post-content margin-top display-flex flex-direction-column justify-content-flex-end newsman-object-fit">
                      <img src="./img/01.jpg" alt="1" />
                      <div className="post-title">
                        <a href="/single/">
                          <h2 className="no-margin-bottom">
                            {data.detail}
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default TodayNew;
