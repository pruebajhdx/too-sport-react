import React, { useEffect } from "react";

const timeNow = () => {
    const today = new Date();
    let hour = today.getUTCHours();
    let min = today.getUTCMinutes();
    let sec = today.getUTCSeconds();
    const clock = document.getElementById("clock");
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    if(clock !== null) return clock.textContent = `${hour + 1} : ${min} : ${sec}`;
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
