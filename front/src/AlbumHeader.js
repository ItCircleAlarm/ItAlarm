import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Head = () => {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          {" "}
          {/* Add d-flex justify-content-between */}
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>It Circle Alarm</strong>
          </a>
          <div className="d-flex align-items-center">
            {" "}
            {/* Add div for right aligned links */}
            <a
              href="#"
              className="navbar-brand d-flex align-items-center ms-auto"
            >
              {" "}
              {/* Add ms-auto for right alignment */}
              정보 수정 요청
            </a>
            <a href="#" className="navbar-brand d-flex align-items-center ms-3">
              {" "}
              {/* Add margin for spacing */}
              동아리 등록 요청
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;
