import axios from "axios";
import React, { useEffect, useState } from "react";
import ListElement from "../../elements/ElementList";
import Navbar from "../../home/Navbar";
import LoadingSpinnerPage from "../../loading/loadingPage";
import Player from "../../player/player";
import TitleResult from "../search/TitleResult";

const getData = async (setData, setLoading ) => {
    const data = await axios
        .get("https://api-tv-k1.herokuapp.com/api/streaming/f1")
        .then((res) => res.data.result);
    setData(data);
    setLoading(true)
};

const F1 = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    const [pos, setPos] = useState(null);
    const [loading, setLoading ] = useState(false)
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        getData(setData, setLoading);
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
