import React from "react";

const MatchesMlb= ({ value, idx, setId, setShowPlayer, pos, setPos }) => {
    return (
        <div className="blog-list display-flex align-items-start">
            <div className="blog-list-img newsman-object-fit">
                <img
                    src="https://logodownload.org/wp-content/uploads/2020/07/mlb-logo.png"
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
                        Evento MLB 
                    </a>
                </div>
                <h2 className="margin-bottom-half ">
                    <a
                        href="!"
                        onClick={() => {
                            setId(value.id);
                            setPos(idx);
                            setShowPlayer(true);
                        }}
                    >
                        {value.name}
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
                {<span>{`${value.time} Hrs,`}</span>}
                <span>{`${new Date().toDateString()}.`}</span>
            </div>
        </div>
    );
};

export default MatchesMlb;
