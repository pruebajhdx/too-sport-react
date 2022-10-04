import axios from "axios";

const getDataPlayer = (type, statePlayer, id, setUrl) => {
    if (statePlayer === true) {
        axios
            .get(`https://api-tv-k1.herokuapp.com/api/streaming/${type}/${String(id)}`, {
                headers: {
                    key: process.env.REACT_APP_APITV_PASS
                }
            })
            .then((result) => {
                setUrl(result.data.result);
            });
    }
};


export default getDataPlayer;