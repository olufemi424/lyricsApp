import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-danger">Page Not Found</h1>
        <p className="lead">
          This page is not available go back to <Link to="/">home page</Link>
        </p>
      </div>
    </div>
  );
}
