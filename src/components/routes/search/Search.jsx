import $$ from "dom7";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../home/Navbar";
import TitleInput from "./TitleSearch";
import ResultSearchFootball from "./ResultSearchFootball";
import ResultSearchChannels from "./ResultSearchChannels";

const changeColorBackground = () => {
    const background_color = "#36585a";
    $$(".newsman-page-gradient").css("background-color", background_color);
};

const InputSearch = () => {
    changeColorBackground();

    const [value, setValue] = useState("");
    const [listData, setList] = useState("");
    const [loading, setLoading] = useState(null);
    const [valueBotton, setValueButton] = useState(null);

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
          if (valueBotton === null) {
              alert("Seleccione una opción de busqueda");
              return;
          }
          if (e.target.value === "") {
              alert("El campo se encuentra vacio");
              return;
          }
          setLoading(true);
          axios
              .get(
                  `http:/api-tv-k1.herokuapp.com/api/search/${valueBotton}/${value}`
              )
              .then((res) => {
                  e.target.value = "";
                  setList(res.data === null ? res.result : res.data);
                  setLoading(false);
              });
      }
    };

    return (
        <div className="newsman-block">
            <TitleInput />
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
                        placeholder="Ingrese el evento a buscar"
                        className="input"
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                <div className="tags display-flex">
                    <div className="newsman-badge">
                        <a
                            href="!"
                            className="badge bg-color-white text-color-black"
                            onClick={() => setValueButton("football")}
                        >
                            Partidos de Futbol
                        </a>
                    </div>
                    <div className="newsman-badge">
                        <a
                            href="!"
                            className="badge bg-color-white text-color-black"
                            onClick={() => setValueButton("channels")}
                        >
                            Canales
                        </a>
                    </div>
                </div>
            </div>
            {valueBotton === "football" ? (
                <ResultSearchFootball data={listData} state={loading} />
            ) : null}
            {valueBotton === "channels" ? (
                <ResultSearchChannels data={listData} state={loading} />
            ) : null}
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
