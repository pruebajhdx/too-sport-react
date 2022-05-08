import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import getDataPlayer from "./type"

const Player = ({ statePlayer, id, setShowPlayer, type, setPos }) => {
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDataPlayer(type, statePlayer, id, setUrl);
    }, [])
  
    if (url !== null) {
        setPos(null)
        console.log(url[0])
        return (
            <div>
                {statePlayer && (
                    <div className="menu">
                        <button
                            className="cancel-button"
                            onClick={() => {
                                setShowPlayer(false);
                                setLoading(false);
                            }}
                        >
                            <FeatherIcon
                                icon="x-circle"
                                onLoad={() => setLoading(false)}
                            ></FeatherIcon>
                        </button>
                        <ul>
                            {loading === false ? (
                                Object.keys(url[0]).length === 0 ? (
                                    <span>Sin respuesta del reproductor.</span>
                                ) : <span>Espera que cargue el reproductor.</span>
                            ) : null}

                              
                            <iframe
                                title="Player Streaming"
                                src={url[0].frameStreaming}
                                name="tmaplayer"
                                frameBorder="no"
                                scrolling="no"
                                onLoad={() => setLoading(true)}
                                allowFullScreen="allowfullscreen"
                            ></iframe>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
};

export default Player;
