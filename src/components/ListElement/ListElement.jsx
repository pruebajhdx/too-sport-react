import React from "react";

const ListElement = ({ value, idx, setId, setShowPlayer}) => {
    return (
        <div key={idx} className="blog-list display-flex align-items-start">
            <div className="blog-list-img newsman-object-fit">
                <img src={value.imgTitle} alt="bl1" />
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
                        {`Servidor ${value.nameLinks}`}
                    </a>
                </div>
                <h2 className="margin-bottom-half">
                    <a
                        href="!"
                        onClick={() => {
                            setId(value.id);
                            setShowPlayer(true);
                        }}
                    >
                        {value.name}
                    </a>
                </h2>
                <span>{`${value.eventTime} Hrs,`} </span>
                <span>{`${new Date().toDateString()}.`}</span>
            </div>
        </div>
    );
};

export default ListElement;
