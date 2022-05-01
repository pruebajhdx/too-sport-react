import React from "react";

const TitleInput = () => {
    return (
      <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
        <div>
          <div className="block-title-medium no-margin block-title text-semibold">
            Busqueda
          </div>
          <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
            Filtro de eventos disponibles del día
          </div>
        </div>
        <div className="newsman-badge">
          <a href="!" className="badge bg-color-white text-color-black">
            ATENCIÓN
          </a>
        </div>
      </div>
    );
  };


  export default TitleInput