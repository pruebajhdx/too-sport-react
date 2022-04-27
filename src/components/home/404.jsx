import React from "react";
import { Link } from "react-router-dom";

const SomethingWrong = () => {
  return (
    <div className="not-found-page-content margin-top padding-top">
      <h1 className="">404</h1>
      <h2>Look like you're lost in space</h2>
      <p className="text-color-gray margin-left margin-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Link
        to="/"
        className="link back col display-inline-block button button-fill color-yellow text-color-black padding-left padding-right external"
      >
        Back to home
      </Link>
    </div>
  );
};

export default SomethingWrong;
