import Navbar from "../../home/Navbar";
import $$ from "dom7";
import React, { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../loading/loading";

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
  return (
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
    </div>
  );
};

const InputSearch = () => {
  const background_color = "#36585a";
  $$(".newsman-page-gradient").css("background-color", background_color);

  const [value, setValue] = useState("");
  const [football, setListFootball] = useState("");
  const [loading, setLoading] = useState(null);

  const submitValue = {
    value: value,
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      axios
        .get(
          `http://www.too-sport.com/api/search/football/${submitValue.value}`
        )
        .then((res) => {
          setListFootball(res.data);
          setLoading(false);
        });
    }
  };

  return (
    <div className="newsman-block">
      <TitleInput />
      <TagInput />
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
          <input
            type="text"
            placeholder="Nueva busqueda"
            className="input"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <ResultSearch data={football} state={loading} />
      </div>
    </div>
  );
};

const ResultSearch = (props) => {
  const [id, setId] = useState(null);
  
  if (props.state === true) {
    return(<LoadingSpinner/>)
  } 
  
  if (props.data.reponse !== undefined) {
    if (props.data.reponse === "Search not found") {
      return (
        <div>
          {" "}
          <p>No se encontro nada</p>
        </div>
      );
    }
    return (
      <div className="newsman-block">
        <TitleResult />
        <div className="newsman-block-content">
          <div className="blog-list-wrapper">
            {props.data.reponse.map((value, idx) => (
              <div
                key={idx}
                className="blog-list display-flex align-items-start"
              >
                <div className="blog-list-img newsman-object-fit">
                  <img src={value.imgTitle} alt="bl1" />
                </div>
                <div className="blog-list-infos margin-left">
                  <div className="newsman-badge">
                    <a
                      href="!"
                      className="badge color-purple text-color-white"
                      onClick={() => setId(value.id)}
                    >
                      {`Servidor ${value.nameLinks}`}
                    </a>
                  </div>
                  <h2 className="margin-bottom-half">
                    <a href="!" onClick={() => setId(value.id)}>
                      {value.name}
                    </a>
                  </h2>
                  <span>{`${value.eventTime} Hrs,`} </span>
                  <span>{`${new Date().toDateString()}.`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

const TitleResult = () => {
  return (
    <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
      <div>
        <div className="block-title-medium no-margin block-title text-semibold">
          Resultado
        </div>
        <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
          Filtro de busqueda
        </div>
      </div>
      <div className="newsman-badge">
        <a href="!" className="badge bg-color-white text-color-black">
          RESPUESTA
        </a>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div>
      <Navbar />
      <InputSearch />
    </div>
  );
};

export default Search;
