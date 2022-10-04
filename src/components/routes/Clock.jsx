import React, { useEffect } from "react";

const timeNow = () => {
    const today = new Date();
  
    const clock = document.getElementById("clock");
    const timeZone = today.toLocaleString("en-US", {
        timeZone: "Europe/London",
        hourCycle: 'h23',
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const hr = Number(timeZone.slice(0, 2))
    const hour = hr > 12 ? "PM" : "AM";
    if(clock !== null) return clock.textContent = `${timeZone} ${hour}`;
    
};

setInterval(timeNow, 1000);

const ClockGMT = () => {
    useEffect(() => {
      timeNow()
    });

    return (
        <section className="time section">
            <div className="container">
                <span className="title-name-clock">Zona horaria de Londres: </span><span id="clock"></span>
            </div>
        </section>
    );
};

export default ClockGMT;
