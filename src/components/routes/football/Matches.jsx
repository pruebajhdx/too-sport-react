import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ListElement from "../../elements/ElementList";
import LoadingSpinnerPage from "../../loading/loadingPage";
import Player from "../../player/player";
import TitleResult from "../search/TitleResult";

const getData = async (league, setData, setLoading) => {
    setLoading(true);
    const { result } = await axios
        .get(`http://www.too-sport.com/api/search/leagues/${league}`)
        .then((element) => element.data);
    setData(result);
    setLoading(false);
};

const Matches = () => {
    let { league } = useParams();
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [showPlayer, setShowPlayer] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData(league, setData, setLoading);
    }, [league]);

    if(loading === true) {
        return <LoadingSpinnerPage detail='Cargando enlances de partidos'/>
    }

    if (data !== null) {
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
                            Partidos disponibles
                        </div>
                    </div>
                </div>
                <div className="newsman-block no-border">
                    <TitleResult title="Partidos disponibles por hoy" />
                    <div className="newsman-block-content">
                        <div className="blog-list-wrapper">
                            {data.map((value, idx) => (
                                <ListElement key={idx}
                                    value={value}
                                    idx={idx}
                                    setId={setId}
                                    setShowPlayer={setShowPlayer}
                                />
                            ))}
                        </div>
                        {showPlayer === true ? (
                            <Player
                                statePlayer={showPlayer}
                                setShowPlayer={setShowPlayer}
                                type="football"
                                id={id}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
};

export default Matches;
