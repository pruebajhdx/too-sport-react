import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../home/Navbar";
import ListWrapper from "./ListWrapper";
import LoadingSpinnerPage from "../../loading/loadingPage";

const getAnswer = async ( setLeagues, setLoading ) => {
    setLoading(true)
    const { data } = await axios("https://api-tv-k1.herokuapp.com/api/streaming/league", {
        headers: {
            key: process.env.REACT_APP_APITV_PASS
        }
    });
    setLeagues(data);
    setLoading(false)
  };


const Ligues = () => {
    const [ligues, setLeagues] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
       getAnswer(setLeagues, setLoading);
    }, []);

    if(loading === true) {
        return <LoadingSpinnerPage detail='Esperando respuesta de ligas disponibles'/>
    }

    if(ligues != null){
        return (
            <div className="page-content">
                <Navbar />
                <div className="newsman-block no-border">
                    <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
                        <div>
                            <div className="block-title-medium no-margin block-title text-semibold">
                                Eventos de futbol
                            </div>
                            <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
                                Partidos del día de hoy
                            </div>
                            <p>Los eventos se pueden actualizar sin previo aviso, este pendiente de acuerdo a su zona horaria. Actualización día a día. </p>
                        </div>
                    </div>
                    <div className="newsman-block-content">
                       <ListWrapper data = {ligues}/>
                    </div>
                </div>
    
                <div id="fix-f7" className=""></div>
            </div>
        );
    }

};

export default Ligues;
