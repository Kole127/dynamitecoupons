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
                <td>{coupon.is_active}</td>
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
