import React, { Fragment } from "react";
import Form from "./Form";
import Coupons from "./Coupons";
export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Coupons />
    </Fragment>
  );
}
