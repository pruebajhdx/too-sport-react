import axios from "axios";

const getDataPlayer = (type, statePlayer, id, setUrl) => {
    if (type === "channel") {
        if (statePlayer === true) {
            axios
                .get(`https://api-tv-k1.herokuapp.com/api/channel/${String(id)}`, {
                    headers: {
                        key: 'Mmjj5566?apiTvK1@too.sport.com'
                    }
                })
                .then((channel) => {
                    setUrl(channel.data.result);
                });
        }
    }

    if (type === "football") {
        if (statePlayer === true) {
            axios
                .get(
                    `https://api-tv-k1.herokuapp.com/api/streaming/football/${String(id)}`, {
                        headers: {
                            key: 'Mmjj5566?apiTvK1@too.sport.com'
                        }
                    }
                )
                .then((football) => {
                    setUrl(football.data.result);
                });
        }
    }
    if (type === "south") {
        console.log(id)
        if (statePlayer === true) {
            axios
                .get(
                    `https://api-tv-k1.herokuapp.com/api/streaming/football/southAmerican/${String(id)}`, {
                        headers: {
                            key: 'Mmjj5566?apiTvK1@too.sport.com'
                        }
                    }
                )
                .then((south) => {
                    setUrl(south.data.data);
                });
        }
    }
    if (type === "f1") {
        if (statePlayer === true) {
            axios
                .get(
                    `https://api-tv-k1.herokuapp.com/api/streaming/f1/${String(id)}`, {
                        headers: {
                            key: 'Mmjj5566?apiTvK1@too.sport.com'
                        }
                    }
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
                    `https://api-tv-k1.herokuapp.com/api/streaming/baseball/${String(id)}`, 
                    {
                        headers: {
                            key: 'Mmjj5566?apiTvK1@too.sport.com'
                        }
                    }
                )
                .then((mlb) => {
                    setUrl(mlb.data.responseData);
                });
        }
    }

    
};


export default getDataPlayer;