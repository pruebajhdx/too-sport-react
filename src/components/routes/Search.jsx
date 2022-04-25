import React from "react";
import Navbar from "../home/Navbar";
import $$ from "dom7"; 

const TitleInput = () => {
  return (
    <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
      <div>
        <div className="block-title-medium no-margin block-title text-semibold">
          Busqueda
        </div>
        <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
          Filtro de eventos disponibles del día
        </div>
      </div>
      <div className="newsman-badge">
        <a href="!" className="badge bg-color-white text-color-black">
          ATENCIÓN
        </a>
      </div>
    </div>
  );
};

const TagInput = () => {
    return(
        <div className="tags display-flex">
        <div className="newsman-badge">
          <a href="!" className="badge bg-color-white text-color-black">
            Partido de futbol
          </a>
        </div>
        <div className="newsman-badge">
          <a href="!" className="badge bg-color-white text-color-black">
            Ligas de futbol
          </a>
        </div>
        <div className="newsman-badge">
          <a href="!" className="badge bg-color-white text-color-black">
            Canales
          </a>
        </div>
        <div className="newsman-badge">
          <a href="!" className="badge bg-color-white text-color-black">
            Art
          </a>
        </div>
        <div className="newsman-badge">
          <a href="!" className="badge bg-color-white text-color-black">
            Fitness
          </a>
        </div>
        <div className="newsman-badge">
          <a href="!" className="badge bg-color-white text-color-black">
            Science
          </a>
        </div>
      </div>
    )
}

const InputSearch = () => {
    removeElementGradient()
  return (
    <div className="newsman-block">
        <TitleInput/>
      <div className="newsman-block-content">
        <div className="newsman-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Search For News" className="input" />
        </div>
       <TagInput/>
      </div>
    </div>
  );
};

const removeElementGradient = () => {
    $$(".newsman-page-gradient").css("background-color", "#36585a")
}


const ResultSearch = () => {
  
    return(
        <div className="newsman-block">
        <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">Entertainment</div>
            <div className="newsman-opacity block-title no-margin newsman-block-subtitle">Read trending news</div>
          </div>
          <div className="newsman-badge">
            <a href="!" className="badge bg-color-white text-color-black">SEE ALL</a>
          </div>
        </div>
        <div className="newsman-block-content">
          <div className="blog-list-wrapper">
            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-img newsman-object-fit">
                <img src="./img/09.jpg" alt="bl1"/>
              </div>
              <div className="blog-list-infos margin-left">
                <div className="newsman-badge">
                  <a href="!" className="badge color-purple text-color-white">Health news</a>
                </div>
                <h2 className="margin-bottom-half"><a href="/single/">Physical distancing. Image created by Samuel Rodriguez.</a></h2>
                <span>Sience . 26 May, 2020</span>
              </div>
            </div>
            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-img newsman-object-fit">
                <img src="./img/10.jpg" alt="bl2"/>
              </div>
              <div className="blog-list-infos margin-left">
                <div className="newsman-badge">
                  <a href="!" className="badge color-lightblue text-color-white">Health news</a>
                </div>
                <h2 className="margin-bottom-half">
                  <a href="/single/">This piece is about turning a negative into positive.</a>
                </h2>
                <span>Sience . 26 May, 2020</span>
              </div>
            </div>
            <div className="blog-list display-flex align-items-start">
              <div className="blog-list-img newsman-object-fit">
                <img src="./img/11.jpg" alt="bl2"/>
              </div>
              <div className="blog-list-infos margin-left">
                <div className="newsman-badge">
                  <a href="!" className="badge color-teal text-color-white">Health news</a>
                </div>
                <h2 className="margin-bottom-half">
                  <a href="/single/"> Stay Home Safe for World. Image created by Dzana Serdarevic </a>
                </h2>
                <span>Sience . 26 May, 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

const Search = () => {
  return(
      <div>
          <Navbar/>
          <InputSearch/>
          <ResultSearch/>
      </div>
  );
};

export default Search;
