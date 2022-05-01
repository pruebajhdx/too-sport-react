import React from "react";

const LoadingSpinnerPage = ({ detail }) => {
    return (
        <div className="loader-container">
            <div className="loader-background">
                <div className="loading-spinner "></div>
            </div>
            {detail !== null ? <p>{detail}</p> : null}
        </div>
    );
};

export default LoadingSpinnerPage;
