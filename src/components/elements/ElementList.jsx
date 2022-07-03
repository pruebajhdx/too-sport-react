import React from "react";
import { imageUrl, nameChampionship } from "./helper";


const ListElement = ({ value, idx, setId, setShowPlayer, pos, setPos }) => {
    return (
        <div className="blog-list display-flex align-items-start">
            <div className="blog-list-img newsman-object-fit">
                <img
                    src={
                        value.imgTitle === undefined
                            ? imageUrl(value.type)
                            : value.imgTitle
                    }
                    alt="bl1"
                />
            </div>
            <div className="blog-list-infos margin-left">
                <div className="newsman-badge">
                    <a
                        href="!"
                        className="badge color-purple text-color-white"
                        onClick={() => {
                            setId(value.id);
                            setShowPlayer(true);
                        }}
                    >
                        {value.nameLinks === undefined
                            ? nameChampionship(value.championship, idx)
                            : value.nameLinks}
                    </a>
                </div>
                <h2 className="margin-bottom-half ">
                    <a
                        href="!"
                        onClick={() => {
                            setId(value.id === undefined ? value : value.id);
                            setPos(idx);
                            setShowPlayer(true);
                        }}
                    >
                        {value.name === undefined ? value : value.name}
                    </a>
                    {idx === pos ? (
                        <div className="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    ) : null}
                </h2>
                {value.eventTime === undefined ? null : (
                    <span>{`${value.eventTime} Hrs,`}</span>
                )}
                <span>{` ${new Date().toDateString()}. Actualizado`}</span>
            </div>
        </div>
    );
};

export default ListElement;
