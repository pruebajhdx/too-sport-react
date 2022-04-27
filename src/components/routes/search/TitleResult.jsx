import React from "react";


const TitleResult = (props) => {
    return (
      <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
        <div>
          <div className="block-title-medium no-margin block-title text-semibold">
            Resultado
          </div>
          <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
            {props.title}
          </div>
        </div>
        <div className="newsman-badge">
          <a href="!" className="badge bg-color-white text-color-black">
            RESPUESTA
          </a>
        </div>
      </div>
    );
  };


  export default TitleResult;