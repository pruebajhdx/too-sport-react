import React, { useState } from "react";
import ListElement from "../../ListElement/ListElement";
import LoadingSpinner from "../../loading/loading";
import Player from "../../player/player";
import TitleResult from "./TitleResult";

const ResultSearchFootball = (props) => {
    const [id, setId] = useState(null);
    const [showPlayer, setShowPlayer] = useState(false);

    if (props.state === true) {
        return <LoadingSpinner />;
    }

    if (props.data.reponse !== undefined) {
        if (props.data.reponse === "Search not found") {
            return (
                <div>
                    <p>No se encontro nada</p>
                </div>
            );
        }
        return (
            <div className="newsman-block">
                <TitleResult title="Seleciona el de futbol" />
                <div className="newsman-block-content">
                    <div className="blog-list-wrapper">
                        {props.data.reponse.map((value, idx) => (
                            <ListElement
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
        );
    }
};

export default ResultSearchFootball;
