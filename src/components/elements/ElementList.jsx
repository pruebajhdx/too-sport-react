import React from "react";

const imageUrl = (value) => {
    if (value === "before pe") {
        return (value = "https://iconarchive.com/download/i48983/custom-icon-design/all-country-flag/Peru-Flag.ico");
    }
    if (value === "before co") {
        return (value =
            "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Colombia-Flag-icon.png");
    }
    if (value === undefined) {
        return (value =
            "https://www.pngplay.com/wp-content/uploads/9/Live-Free-Picture-PNG.png");
    }
};
const ListElement = ({ value, idx, setId, setShowPlayer, pos, setPos }) => {
    return (
        <div key={idx} className="blog-list display-flex align-items-start">
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
                            ? `Servidor ${idx + 1}`
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
                        <div class="lds-ring">
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
                <span>{`${new Date().toDateString()}.`}</span>
            </div>
        </div>
    );
};

export default ListElement;
