import React, { useState } from "react";
import "./Style.css";

const AccordionDateF1 = ({ title, dates }) => {
    const [isOpen, setOpen] = useState(false);

    console.log(dates)
    return (
        <div className="accordion-wrapper">
            <div
                className={`accordion-title ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
            >
                {title}
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">
                    {dates.map((value, idx) => (
                        <p>
                            <b>{value.date}</b>
                            <p> <b className="time-color">{value.time}</b> <span> {value.name}</span></p>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AccordionDateF1;
