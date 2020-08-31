import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCoupons, deleteCoupon } from "../../actions/coupons";

export class Coupons extends Component {
  static propTypes = {
    coupons: PropTypes.array.isRequired,
    getCoupons: PropTypes.func.isRequired,
    deleteCoupon: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCoupons();
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

    function ReformatDate(input) {
      var datePart = input.match(/\d+/g),
        year = datePart[0], // get only two digits
        month = datePart[1],
        day = datePart[2];

      return day + "." + month + "." + year;
    }

    return (
      <Fragment>
        <h2 className="coupons-heading">Coupons</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Store</th>
              <th>Name</th>
              <th>Discount</th>
              <th>Expiry Date</th>
              <th>Valid</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td>{coupon.username}</td>
                <td>{coupon.name}</td>
                <td>{coupon.discount}%</td>
                <td>{coupon.expiry_date}</td>
                <td>
                  {compare_dates(coupon.expiry_date, formatDate(today))},{" "}
                  {ReformatDate(coupon.expiry_date)}
                </td>
                <td>
                  <button
                    onClick={this.props.deleteCoupon.bind(this, coupon.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
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

export default connect(mapStateToProps, { getCoupons, deleteCoupon })(Coupons);
