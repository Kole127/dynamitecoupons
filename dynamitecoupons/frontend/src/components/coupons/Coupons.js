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
        <h2>Coupons</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td>{coupon.id}</td>
                <td>{coupon.name}</td>
                <td>{coupon.email}</td>
                <td>{coupon.message}</td>
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
