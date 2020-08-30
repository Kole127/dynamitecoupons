import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCouponsU } from "../../actions/coupons";
import coupons from "../../reducers/coupons";

export class Coupons_List extends Component {
  static propTypes = {
    coupons: PropTypes.array.isRequired,
    getCouponsU: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCouponsU();
  }

  render() {
    var compare_dates = function (date1, date2) {
      if (date1 >= date2) return "Active";
      else return "Expired";
    };

    var today = new Date();

    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }

    return (
      <Fragment>
        <div className="card card-body mt-4 mb-4">
          <h2 className="coupons-heading">Coupons Page</h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Store</th>
              <th>Name</th>
              <th>Discount</th>
              <th>Valid</th>
              <th>QR code</th>
            </tr>
          </thead>
          <tbody>
            {this.props.coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td>{coupon.username}</td>
                <td>{coupon.name}</td>
                <td>{coupon.discount}%</td>
                <td>
                  {compare_dates(coupon.expiry_date, formatDate(today))},{" "}
                  {coupon.expiry_date}
                </td>
                <td>
                  <img src={coupon.qr_code} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  coupons: state.coupons.coupons,
});

export default connect(mapStateToProps, { getCouponsU })(Coupons_List);
