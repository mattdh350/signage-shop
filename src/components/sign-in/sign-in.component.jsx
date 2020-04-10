import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="subtitle">Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <FormButton type="submit">Sign In</FormButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
