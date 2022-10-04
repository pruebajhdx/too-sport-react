import React from "react";

const ElementListV2= ({ value, idx, setId, setShowPlayer, pos, setPos, name, img }) => {
    return (
        <div className="blog-list display-flex align-items-start">
            <div className="blog-list-img newsman-object-fit">
                <img
                    src={img}
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
                        {name}
                    </a>
                </div>
                <h2 className="margin-bottom-half ">
                    <a
                        href="!"
                        onClick={() => {
                            setId(value.id);
                            setPos(idx);
                            console.log(idx)
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

export default ElementListV2;
