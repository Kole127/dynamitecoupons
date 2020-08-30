import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Dynmite Coupons
            </h6>
            <p>
              Best coupon platform out there. Find and use coupons to get great
              discounts in your favorite stores around the region.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Our Partners
            </h6>
            <p>
              <a href="#!">Konzum</a>
            </p>
            <p>
              <a href="#!">Sancta Domenica</a>
            </p>
            <p>
              <a href="#!">Mikronis</a>
            </p>
            <p>
              <a href="#!">Čazmatransr</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a href="#!">Login</a>
            </p>
            <p>
              <a href="#!">Register</a>
            </p>
            <p>
              <a href="#!">Home</a>
            </p>
            <p>
              <a href="#!">Coupon list</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Zvonimirova 122, 10000 Zagreb,
              Croatia
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 250 000
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 250 000
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPagePro;
