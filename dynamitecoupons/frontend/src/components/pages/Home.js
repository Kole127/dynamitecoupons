import React, { Component, Fragment } from "react";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <div className="container">
            <h1>Big Title</h1>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col">
              <h2 className="home heading-users">
                Get super juiced discounts from our partners and save yourself a
                lot of money
              </h2>
              <a href={"/#/list"} className="button">
                View Coupons
              </a>
            </div>
            <div className="col">
              <h2 className="home heading-users">
                Become our partner and serve your coupons on our site
              </h2>
              <a href={"/#/register"} className="button">
                Register
              </a>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col">
              <h2 className="home heading-users">Our Partners</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                className="partner-logo"
                src="../../static/img/konzum-logo.png"
              ></img>
            </div>
            <div className="col">
              <img
                className="partner-logo"
                src="../../static/img/konzum-logo.png"
              ></img>
            </div>
            <div className="col">
              <img
                className="partner-logo"
                src="../../static/img/konzum-logo.png"
              ></img>
            </div>
            <div className="col">
              <img
                className="partner-logo"
                src="../../static/img/konzum-logo.png"
              ></img>
            </div>
            <div className="col">
              <img
                className="partner-logo"
                src="../../static/img/konzum-logo.png"
              ></img>
            </div>
            <div className="col">
              <img
                className="partner-logo"
                src="../../static/img/konzum-logo.png"
              ></img>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
