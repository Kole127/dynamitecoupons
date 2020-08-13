import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCoupon } from "../../actions/coupons";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    mesoge: "",
  };

  static propTypes = {
    addCoupon: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, mesoge } = this.state;
    const coupon = { name, email, mesoge };
    this.props.addCoupon(coupon);
    this.setState({
      name: "",
      email: "",
      mesoge: "",
    });
  };

  render() {
    const { name, email, mesoge } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Coupon</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="mesoge"
              onChange={this.onChange}
              value={mesoge}
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
