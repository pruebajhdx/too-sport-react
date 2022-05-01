import React from "react";
import { Link } from "react-router-dom";

const nameLeague = (value) => {
    if (value === "slig") {
        return (value = "Süper Lig (Turquía)");
    }
    if (value === "gsl") {
        return (value = "Super League (Grecia)");
    }
    if (value === "mls") {
        return (value = "Major League Soccer (EE.UU)");
    }
    if (value === "eks") {
        return (value = "League Ekstraklasa (Polonia)");
    }
    if (value === "ered") {
        return (value = "League Eredivisie (Países Bajos)");
    }
    if (value === "nos") {
        return (value = "Liga Portugal");
    }
    if (value === "football") {
        return (value = "Liga sin Identificar");
    }
    if (value === "2bundes") {
        return (value = "League 2. Bundesliga");
    }
    if (value === "ssl") {
        return (value = "Super League (Suiza) ");
    }
    if (value === "lal2") {
        return (value = "LaLiga 2 División de España");
    }
    if (value === "jupiler") {
        return (value = "League Pro League (Bélgica)");
    }
    if (value === "seraa") {
        return (value = "League Serie A primera división (Italia)");
    }
    if (value === "uclw") {
        return (value = `UEFA Womens Champions League`);
    }
    if (value === "lig11") {
        return (value = "Ligue 1 (Francia)");
    }
    if (value === "lal") {
        return (value = "La Primera División LaLiga (España) ");
    }
    if (value === "cdllp") {
        return (value = "Copa de la Liga Profesional (Argentina)");
    }
    if (value === "bsera") {
        return (value = "Brasileiro Série A (Brasil)");
    }
    if (value === "ligamx") {
        return (value = "Primera División de México (Liga MX)");
    }
};

const ListWrapper = ({ data }) => {
    return (
        <div className="blog-list-wrapper">
            {Object.keys(data.leagueAvailable).map((value, idx) => (
                <div
                    key={idx}
                    className="blog-list display-flex align-items-start"
                >
                    <div className="blog-list-img newsman-object-fit">
                        <img src={data.leagueAvailable[value]} alt="bl1" />
                    </div>
                    <div className="blog-list-infos margin-left">
                        <div className="newsman-badge">
                            <a
                                href="!"
                                className="badge color-purple text-color-white"
                            >
                                Nombre de liga
                            </a>
                        </div>
                        <h2 className="margin-bottom-half">
                            <Link
                                to={`/football/leagues/${value}`}
                                className="external"
                            >
                                {nameLeague(value)}
                            </Link>
                        </h2>
                        <span>{`${new Date().toDateString()}.`}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListWrapper;
