import axios from "axios";

const getDataPlayer = (type, statePlayer, id, setUrl) => {
    if (type === "channel") {
        if (statePlayer === true) {
            axios
                .get(`https://api-tv-k1.herokuapp.com/api/channel/${String(id)}`)
                .then((channel) => {
                    setUrl(channel.data.result);
                });
        }
    }

    if (type === "football") {
        if (statePlayer === true) {
            axios
                .get(
                    `https://api-tv-k1.herokuapp.com/api/streaming/football/${String(id)}`
                )
                .then((football) => {
                    setUrl(football.data.result);
                });
        }
    }
    if (type === "f1") {
        if (statePlayer === true) {
            axios
                .get(
                    `https://api-tv-k1.herokuapp.com/api/streaming/f1/${String(id)}`
                )
                .then((f1) => {
                    setUrl(f1.data.result);
                });
        }
    }

    if (type === "mlb") {
        if (statePlayer === true) {
            axios
                .get(
                    `https://api-tv-k1.herokuapp.com/api/streaming/baseball/${String(id)}`
                )
                .then((f1) => {
                    setUrl(f1.data.result);
                });
        }
    }

    
};


export default getDataPlayer;