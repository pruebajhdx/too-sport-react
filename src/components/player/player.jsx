import axios from "axios";
import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

const getData = (type, statePlayer, id, setUrl) => {
    if (type === "channel") {
        if (statePlayer === true) {
            axios
                .get(`http://www.too-sport.com/api/channel/${String(id)}`)
                .then((channel) => {
                    setUrl(channel.data.result);
                });
        }
    }

    if (type === "football") {
        if (statePlayer === true) {
            axios
                .get(
                    `http://www.too-sport.com/api/streaming/football/${String(
                        id
                    )}`
                )
                .then((football) => {
                    setUrl(football.data.result);
                });
        }
    }
};

const Player = ({ statePlayer, id, setShowPlayer, type }) => {
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    getData(type, statePlayer, id, setUrl);

    if (url !== null) {
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
                                <span>Espera cargando reproductor</span>
                            ) : (
                                <p> 
                                    <b>Advertencia</b>: Algunos reproductores tienen ventanas
                                    emergentes de publicidad.
                                </p>
                            )}
                            <iframe
                                title="Player Streaming"
                                src={url[0].frameStreaming}
                                name="tmaplayer"
                                frameBorder="no"
                                scrolling="yes"
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
