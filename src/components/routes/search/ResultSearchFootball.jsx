import React, { useState } from "react";
import LoadingSpinner from "../../loading/loading";
import Player from "../../player/player";
import TitleResult from "./TitleResult";


const ResultSearchFootball = (props) => {
    const [id, setId] = useState(null);
    const [showPlayer, setShowPlayer] = useState(false);
   
    if (props.state === true) {
      return <LoadingSpinner />;
    }
  
    if (props.data.reponse !== undefined) {
      if (props.data.reponse === "Search not found") {
        return (
          <div>
            <p>No se encontro nada</p>
          </div>
        );
      }
      return (
        <div className="newsman-block">
          <TitleResult title = "Seleciona el de futbol"/>
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
                        onClick={() => {
                          setId(value.id)
                          setShowPlayer(true)}}
                      >
                        {`Servidor ${value.nameLinks}`}
                      </a>
                    </div>
                    <h2 className="margin-bottom-half">
                      <a href="!" onClick={() => {
                        setId(value.id)
                        setShowPlayer(true)
                      }}>
                        {value.name}
                      </a>
                    </h2>
                    <span>{`${value.eventTime} Hrs,`} </span>
                    <span>{`${new Date().toDateString()}.`}</span>
                  </div>
                </div>
              ))}
            </div>
            <Player statePlayer= {showPlayer} setShowPlayer = {setShowPlayer} type = "football" id = {id} />
          </div>
        </div>
      );
    }
  };

  export default ResultSearchFootball;