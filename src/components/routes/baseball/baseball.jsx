import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../home/Navbar";
import Player from "../../player/player";
import TitleResult from "../search/TitleResult";
import LoadingSpinnerPage from "../../loading/loadingPage";
import ElementListV2 from "../../elements/ElementListV2";

const getDataBaseball = async (setData, setLoading) => {
    const { data } = await axios
        .get("https://api-tv-k1.herokuapp.com/api/streaming/baseball", {
            headers: {
                key: process.env.REACT_APP_APITV_PASS
            }
        })
        .then((res) => res.data);
    setData(data);
    setLoading(true)
};

const Baseball = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    const [pos, setPos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        getDataBaseball(setData, setLoading);
    },[]);

    if (loading === false) {
        return <LoadingSpinnerPage detail="Cargando eventos de la MLB" />;
    }

    if (data !== null) {
        return (
            <div className="page-content">
                <Navbar />
                <div className="newsman-block">
                    <TitleResult title="Eventos de la MLB en vivo y directo" />
                    <p>
                        <b>Advertencia:</b> Los reproductores pueden contener
                        ventanas emergentes, esto no es controlado por{" "}
                        <b>TooSport</b> puesto que son enlaces recopilados de
                        otros servidores externos.
                    </p>
                 {/*    <AccordionDateF1
                        title="Horarios de eventos"
                        dates={dates}
                    /> */}
                    <div className="newsman-block-content">
                        <div className="blog-list-wrapper">
                            {data.map((value, idx) => (
                                <ElementListV2
                                    key={idx}
                                    value={value}
                                    idx={idx}
                                    img = {'https://logodownload.org/wp-content/uploads/2020/07/mlb-logo.png'}
                                    name = {'MLB'}
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
                                type="mlb"
                                id={id}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
};

export default Baseball;
