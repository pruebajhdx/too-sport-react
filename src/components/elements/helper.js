
const imageUrl = (value) => {
    if (value === "before pe") {
        return (value =
            "https://iconarchive.com/download/i48983/custom-icon-design/all-country-flag/Peru-Flag.ico");
    }
    if (value === "before co") {
        return (value =
            "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Colombia-Flag-icon.png");
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