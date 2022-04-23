import React from "react";

const data = [
  {
    urlImage: "./img/09.jpg",
  },
  {
    urlImage: "./img/10.jpg",
  },
  {
    urlImage: "./img/11.jpg",
  },
];

const WrapperTitle = () => {
  return (
    <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
      <div>
        <div className="block-title-medium no-margin block-title text-semibold">
          Test
        </div>
        <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
          Actualización en cada momento
        </div>
      </div>
      <div className="newsman-badge">
        <a href="!" className="badge bg-color-white text-color-black">
          NOTICIAS
        </a>
      </div>
    </div>
  );
};

const ListWrapper = () => {
  return (
    <div className="blog-list-wrapper">
      {data.map((data, idx) => (
        <div
          key={idx}
          className="blog-list display-flex align-items-start flex-direction-row-reverse"
        >
          <div className="blog-list-img newsman-object-fit">
            <img src={data.urlImage} alt="bl1" />
          </div>
          <div className="blog-list-infos margin-right margin-top">
            <h2 className="margin-bottom-half no-margin-top">
              <a href="/single/">
                Physical distancing. Image created by Samuel Rodriguez.
              </a>
            </h2>
            <span>Sience . 26 May, 2020</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const HotTopic = () => {
  return (
    <div className="newsman-block">
      <WrapperTitle />
      <div className="newsman-block-content">
        <ListWrapper />
      </div>
    </div>
  );
};

export default HotTopic;
