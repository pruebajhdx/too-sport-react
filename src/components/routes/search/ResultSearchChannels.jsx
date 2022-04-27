import React, { useState } from "react";
import LoadingSpinner from "../../loading/loading";
import Player from "../../player/player";
import TitleResult from "./TitleResult";

const ResultSearchChannels = (props) => {

    const [showPlayer, setShowPlayer] = useState(false);
    const [id, setId] = useState("");

    if (props.state === true) {
        return <LoadingSpinner />;
    }

    if (props.data.result !== undefined) {
        return (
        <div className="newsman-block">
            <TitleResult title="Filtro de busqueda por canales" />
            <div className="newsman-block-content">
            <div className="blog-list-wrapper">
                {Object.keys(props.data.result).map((value, idx) => (
                    <div
                    key={idx}
                    className="blog-list display-flex align-items-start">
                    <div className="blog-list-img newsman-object-fit">
                    <img
                        src="https://www.pngplay.com/wp-content/uploads/9/Live-Free-Picture-PNG.png"
                        alt="bl1"
                    />
                    </div>
                    <div className="blog-list-infos margin-left">
                    <div className="newsman-badge">
                        <a
                        href="!"
                        onClick={() => {setShowPlayer(true)}}
                        className="badge color-purple text-color-white">
                        {`Resultado ${idx + 1}`}
                        </a>
                    </div>
                    <h2 className="margin-bottom-half">
                        <a href="!" onClick={() => {
                            setShowPlayer(true) 
                            setId(value)}}>
                        {value}
                        </a>
                    </h2>
                    <span>{`${new Date().toDateString()}.`}</span>
                    </div>
                </div>
                ))}
                <Player statePlayer= {showPlayer} setShowPlayer = {setShowPlayer} type = "channel" id = {id} />
            </div>
            </div>
        </div>
        );
    }
};

export default ResultSearchChannels;
