import axios from "axios";
import React, { useState } from "react";

const Player = ({ statePlayer, id, setShowPlayer, type }) => {
    const [channelUrl, setChannelUrl] = useState(null);

    if (type === "channel") {
        if (statePlayer === true) {
            axios
                .get(`http://www.too-sport.com/api/channel/${String(id)}`)
                .then((channel) => {
                    setChannelUrl(channel.data.result);
                });
        }
    }

    if (type === "football") {
        if (statePlayer === true) {
            axios
                .get(`http://www.too-sport.com/api/streaming/football/${String(id)}`)
                .then((football) => {
                    setChannelUrl(football.data.result);
                });
        }
    }

    if(channelUrl !== null) {
        return (
            <div className="newsman-block">
                {statePlayer && (
                    <div className="menu">
                        <button
                            className="cancel-button"
                            onClick={() => setShowPlayer(false)}
                        >
                            ✕
                        </button>
                        <ul>
                            <iframe
                                title="Player Streaming"
                                src={channelUrl[0].frameStreaming} 
                                name="tmaplayer"
                                width="54%"
                                height="601"
                                frameBorder="no"
                                scrolling="no"
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
