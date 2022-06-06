import axios from "axios";
import React, { useEffect, useState } from "react";
import ListElement from "../../elements/ElementList";
import ClockGMT from "../Clock";
import Navbar from "../../home/Navbar";
import LoadingSpinnerPage from "../../loading/loadingPage";
import Player from "../../player/player";
import TitleResult from "../search/TitleResult";
import AccordionDateF1 from "./DateF1";

const getData = async (setData, setLoading, setDates) => {
    const data = await axios
        .get("https://api-tv-k1.herokuapp.com/api/streaming/f1",{
            headers: {
                key: 'Mmjj5566?apiTvK1@too.sport.com'
            }
        })
        .then((res) => res.data.result);
    const date = await axios
        .get("https://api-tv-k1.herokuapp.com/api/streaming/f1/date", {
            headers: {
                key: 'Mmjj5566?apiTvK1@too.sport.com'
            }
        })
        .then((res) => res.data.result);
    setData(data);
    setDates(date);
    setLoading(true);
};

const F1 = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    const [dates, setDates] = useState(null);
    const [pos, setPos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        getData(setData, setLoading, setDates);
    }, []);

    if (loading === false) {
        return <LoadingSpinnerPage detail="Cargando enlaces de Eventos F1" />;
    }

    if (data !== null) {
        return (
            <div className="page-content">
                <Navbar />
                <div className="newsman-block">
                    <TitleResult title="Eventos de F1 en vivo y directo" />
                    <p>
                        <b>Advertencia:</b> Los reproductores pueden contener
                        ventanas emergentes, esto no es controlado por{" "}
                        <b>TooSport</b> puesto que son enlaces recopilados de
                        otros servidores externos.
                    </p>
                    <ClockGMT/>
                    <AccordionDateF1 title="Horarios de eventos" dates = {dates}/>
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
                                type="f1"
                                id={id}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
};

export default F1;
