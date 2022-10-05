import React from "react";
import { Link } from "react-router-dom";

const AdblockDectect = () => {
  return (
    <div className="not-found-page-content margin-top padding-top">
      <h1 className="">ADBLOCK DETECTADO</h1>
      <h2>Por favor desactiva tu Adblock</h2>
      <p className="text-color-gray margin-left margin-right">
        Este servicio es gratuito apoyanos desactivado tu Adblock, una vez desactivado recarga la página
      </p>
      <Link
        to="/"
        onClick={() => window.location.reload()}
        className="link back col display-inline-block button button-fill color-yellow text-color-black padding-left padding-right external"
      >
        RECARGAR PÁGINA
      </Link>
    </div>
  );
};

export default AdblockDectect;
