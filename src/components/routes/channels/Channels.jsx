import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListElement from "../../elements/ElementList";
import LoadingSpinnerPage from "../../loading/loadingPage";
import Player from "../../player/player";
import TitleResult from "../search/TitleResult";

const getData = async (setChannel, setLoading) => {
    axios.get(`https://api-tv-k1.herokuapp.com/api/channel`).then(
        channel => {
            setChannel(channel.data.result)
            setLoading(true)
        }
    );
};

const Channels = () => {
    const navigate = useNavigate();
    const [channel, setChannel] = useState(null);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(null);
    const [showPlayer, setShowPlayer] = useState(false);
    const [pos, setPos] = useState(null)

    useEffect(() => {
        getData(setChannel, setLoading);
    }, []);

    if( loading === false){
        return <LoadingSpinnerPage detail = "Cargando los canales"/>
    }

    if(channel != null) {
        return (
            <div className="newsman-block">
                <div className="navbar navbar-transparent">
                    <div className="navbar-bg"></div>
                    <div className="navbar-inner">
                        <div className="left">
                            {
                            <span className="link back" onClick={() => navigate(-1)}>
                                <i className="icon icon-back"></i>
                            </span> 
                            }
                        </div>
                        <div className="title title-navbar-transparent">
                            Canales disponibles
                        </div>
                    </div>
                </div>
                <div className="newsman-block no-border">
                    <TitleResult title="Vive en vivo y en HD" />
                    <p>
                        <b>Advertencia:</b> Los reproductores pueden contener
                        ventanas emergentes, esto no es controlado por <b>TooSport</b> puesto que 
                        son enlaces recopilados de otros servidores externos.
                    </p>
                    <div className="newsman-block-content">
                        <div className="blog-list-wrapper">
                            {Object.keys(channel).map((value, idx) => (
                                <ListElement key={idx}
                                    value={value}
                                    idx={idx}
                                    pos={pos}
                                    setId={setId}
                                    setPos={setPos}
                                    setShowPlayer={setShowPlayer}
                                />
                            ))}
                        </div>
                        {showPlayer === true ? (
                            <Player
                                statePlayer={showPlayer}
                                setShowPlayer={setShowPlayer}
                                setPos={setPos}
                                type="channel"
                                id={id}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        )
    }

};

export default Channels;
