import React from "react";

const ElementListV3 = ({
    value,
    idx,
    setId,
    setShowPlayer,
    pos,
    setPos,
    name,
    img,
}) => {
    return (
        <div className="container">
            <section>
                <h3>{value.title}</h3>
                <a
                    href="!"
                    onClick={() => {
                        setId(value.id);
                        setPos(idx);
                        console.log(idx);
                        setShowPlayer(true);
                    }}
                >
                    {value.eventTime}
                    {value.name}
                </a>
                <a
                    style={{ color: "#FF5733" }}
                    href="!"
                    onClick={() => {
                        setId(value.id);
                        setPos(idx);
                        console.log(idx);
                        setShowPlayer(true);
                    }}
                >
                    {" "}
                    {value.nameLinks}
                </a>
                {idx === pos ? (
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : null}
            </section>
        </div>
    );
};

export default ElementListV3;
