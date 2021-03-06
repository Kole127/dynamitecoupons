import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCoupon } from "../../actions/coupons";

export class Form extends Component {
  state = {
    name: "",
    code: "",
    discount: "",
    expiry_date: "",
    company: "",
  };

  static propTypes = {
    addCoupon: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, code, discount, expiry_date, company } = this.state;
    const coupon = {
      name,
      code,
      discount,
      expiry_date,
      company,
    };
    this.props.addCoupon(coupon);
    this.setState({
      name: "",
      code: "",
      discount: "",
      expiry_date: "",
      company: "",
    });
  };

  render() {
    const { name, code, discount, expiry_date, company } = this.state;
    
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Coupon</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control naziv"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Code</label>
            <input
              className="form-control naziv"
              type="text"
              name="code"
              onChange={this.onChange}
              value={code}
            />
          </div>
          <div className="form-group popust">
            <label>Discount</label>
            <select
              className="form-control"
              name="discount"
              onChange={this.onChange}
              value={discount}
            >
              <option value=""></option>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
            </select>
          </div>
          <div className="form-group datum">
            <label>Date</label>
            <input
              className="form-control"
              type="date"
              name="expiry_date"
              onChange={this.onChange}
              value={expiry_date}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addCoupon })(Form);
