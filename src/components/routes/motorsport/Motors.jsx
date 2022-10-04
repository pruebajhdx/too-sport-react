import LoadingSpinnerPage from "../../loading/loadingPage";
import TitleResult from "../search/TitleResult";
import Navbar from "../../home/Navbar";
import Player from "../../player/player";
import axios from "axios";
import { useState, useEffect } from "react";
import ElementListV3 from "../../elements/ElementListV3";
import ClockGMT from "../Clock";

const getDataMotors = async (setData, setLoading) => {
    const { result } = await axios
        .get("https://api-tv-k1.herokuapp.com/api/streaming/motors", {
            headers: {
                key: process.env.REACT_APP_APITV_PASS,
            },
    })
    .then((res) => res.data);
    setData(result)
    setLoading(true)
}

const Motors = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    const [pos, setPos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        getDataMotors(setData, setLoading)
    }, [])

    if (loading === false) {
        return <LoadingSpinnerPage detail="Cargando Eventos" />;
    }
    console.log(data)

    if(data !== null) {
        return(
            <div className="page-content">
                <Navbar />
                <div className="newsman-block">
                    <TitleResult title="Eventos deportivos del Motor en vivo y directo" />
                    <p>
                        <b>Advertencia:</b> Los reproductores pueden contener
                        ventanas emergentes, esto no es controlado por{" "}
                        <b>TooSport</b> puesto que son enlaces recopilados de
                        otros servidores externos.
                    </p>
                    <ClockGMT/>
                    <div className="newsman-block-content">
                        <div className="blog-list-wrapper">
                            {data.map((value, idx) => (
                                <ElementListV3
                                    key={idx}
                                    value={value}
                                    idx={idx}
                                    pos={pos}
                                    name = {'Boxeo en vivo'}
                                    img = {'https://png.monster/wp-content/uploads/2022/05/png.monster-804.png'}
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
                                type="motors"
                                id={id}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        )
    }

}

export default Motors
