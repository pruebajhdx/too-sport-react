import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ListElement from "../../elements/ElementList";
import LoadingSpinnerPage from "../../loading/loadingPage";
import Player from "../../player/player";
import ClockGMT from "../Clock";
import TitleResult from "../search/TitleResult";

const getData = async (league, setData, setLoading) => {
    if (league === "southAmerican") {
        const data = await axios
            .get(
                "https://api-tv-k1.herokuapp.com/api/streaming/football/southAmerican",
                {
                    headers: {
                        key: process.env.REACT_APP_APITV_PASS,
                    },
                }
            )
            .then((res) => res.data.data);
        setData(data);
        setLoading(true);
    } else {
        const { result } = await axios
            .get(
                `https://api-tv-k1.herokuapp.com/api/search/leagues/${league}`,
                {
                    headers: {
                        key: process.env.REACT_APP_APITV_PASS,
                    },
                }
            )
            .then((element) => element.data);
        setData(result);
        setLoading(true);
    }
};

const Matches = () => {
    let { league } = useParams();
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [showPlayer, setShowPlayer] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pos, setPos] = useState(null);

    useEffect(() => {
        getData(league, setData, setLoading);
    }, [league]);

    if (loading === false) {
        return <LoadingSpinnerPage detail="Cargando enlances de partidos" />;
    }
    if (data !== null) {
        return (
            <div className="newsman-block">
                <div className="navbar navbar-transparent">
                    <div className="navbar-bg"></div>
                    <div className="navbar-inner">
                        <div className="left">
                            {
                                <span
                                    className="link back"
                                    onClick={() => navigate(-1)}
                                >
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
                    <p>
                        <b>Advertencia:</b> Los reproductores pueden contener
                        ventanas emergentes, esto no es controlado por{" "}
                        <b>TooSport</b> puesto que son enlaces recopilados de
                        otros servidores externos.
                    </p>
                    <ClockGMT />
                    <div className="newsman-block-content">
                        <div className="blog-list-wrapper">
                            {data.map((value, idx) => (
                                <ListElement
                                    key={idx}
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
                                type={
                                    league === "southAmerican"
                                        ? "south"
                                        : "football"
                                }
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
