import React from "react";


export const Navigation2 = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/">
          AX Campus
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="/users" className="page-scroll">
                Users
              </a>
            </li>
            <li>
              <a href="/test" className="page-scroll">
                Chat Room
              </a>
            </li>
           
            <li>
              <a href="/activityAdd" className="page-scroll">
                Create Activity
              </a>
            </li>
          
           
            <li>
              <a href="/loding" className="page-scroll">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
