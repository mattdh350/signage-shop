import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    const { displayName, email, password, confirmPassword } = this.state;
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error creating new user", error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I would like to create a new account</h2>
        <span className="subtitle">
          Sign up below with your email and password.
        </span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            label="Display Name"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <FormButton type="submit">Sign up</FormButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
