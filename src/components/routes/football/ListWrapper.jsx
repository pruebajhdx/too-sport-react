import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nameLeague } from "./nameLeague";

const getLeague = async (setLeagueSouth) => {
    const data = await axios
        .get("http://www.too-sport.com/api/streaming/football/southAmerican")
        .then((res) => res.data);
    setLeagueSouth(data);
};

const ListWrapper = ({ data }) => {
    const [leagueSouth, setLeagueSouth] = useState(null);

    useEffect(() => {
        getLeague(setLeagueSouth);
    }, []);

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

            {leagueSouth !== undefined ? (
                <div className="blog-list display-flex align-items-start">
                    <div className="blog-list-img newsman-object-fit">
                        <img
                            src="https://de-academic.com/pictures/dewiki/67/CONMEBOL_logo.svg"
                            alt="bl1"
                        />
                    </div>
                    <div className="blog-list-infos margin-left">
                        <div className="newsman-badge">
                            <a
                                href="!"
                                className="badge color-purple text-color-white"
                            >
                                Sur America
                            </a>
                        </div>
                        <h2 className="margin-bottom-half">
                            <Link
                                to={`/football/leagues/southAmerican`}
                                className="external"
                            >
                                Ligas SurAmericanas
                            </Link>
                        </h2>
                        <span>{`${new Date().toDateString()}.`}</span>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ListWrapper;