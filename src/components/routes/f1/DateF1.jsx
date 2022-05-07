import React, { useState } from "react";
import "./Style.css";

const AccordionDateF1 = ({ title, dates }) => {
    const [isOpen, setOpen] = useState(false);
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
                {dates[0]}
                {dates.forEach(element => {
                        <p>{element.date}</p>
                    })}
                </div>
            </div>
        </div>
    );
};

export default AccordionDateF1;
