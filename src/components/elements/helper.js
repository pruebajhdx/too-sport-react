
const imageUrl = (value) => {
    if (value === "before pe") {
        return (value =
            "https://upload.wikimedia.org/wikipedia/commons/6/62/Liga_de_F%C3%BAtbol_Profesional_-_Liga_1_%28Per%C3%BA%29.jpg");
    }
    if (value === "before co") {
        return (value =
            "https://1.bp.blogspot.com/--Rhlz92Or5E/X2P5ydGx6iI/AAAAAAABgLo/eAFUsxe_ggorjC0h7W7IC3RcM6-PT3iTgCLcBGAsYHQ/s16000/Liga%2BBetPlay.png");
    }
    if(value === "before lib") {
        return (value =
            "https://logodownload.org/wp-content/uploads/2018/10/copa-libertadores-logo.png");
    }
    if(value === "before csuda") {
        return (value =
            "https://logodownload.org/wp-content/uploads/2018/10/copa-sulamericana-logo.png");
    }
    if (value === undefined) {
        return (value =
            "https://www.pngplay.com/wp-content/uploads/9/Live-Free-Picture-PNG.png");
    }
};

const nameChampionship = (value, idx) => {
    let id = idx + 1
    if( value === "Copa Libertadores") return value = `Copa Libertadores Servidor: ${id}`
    if( value === "Copa Sudamericana") return value = `Copa Sudamericana Servidor: ${id}`
    if( value === "Liga Betplay") return value = `Liga BetPlay Servidor: ${id}`
    if( value === undefined ) return value = "Servidor"
}
module.exports = {
    imageUrl,
    nameChampionship
}