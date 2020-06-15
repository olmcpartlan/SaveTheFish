import React, { Component } from 'react';
import { Card, CardHeader, CardText, Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';


export default class Register extends Component {
  render() {
    return (
      <div>
        <Row>
          <MediaQuery query="(min-width: 800px)">
            <DescriptionCol/>
          </MediaQuery>
          <Col>
            <RegisterCard/>
          </Col>
        </Row>

      </div>
    );
  }
}

class DescriptionCol extends Component {
  render() {
    return (
      <Col className="register-description">
        <p>probably put stuff about why you need to register here</p>
        <p>really just filler to have something besides just the form</p>
      </Col>
    );
  }
}

class RegisterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      firstNameErr: "",
      lastName: "",
      lastNameErr: "",
      email: "",
      emailErr: "",
      userName: "",
      userNameErr: "",
      password: "",
      passwordErr: "",
      confirmPassword: "",
      confirmPasswordErr: ""
    }
  }

  sendRegistration = () => {
    fetch('/api/newuser', {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        userName: this.state.userName,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
  }

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }
  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handleUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handleConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  validateFirstName = () => {
    const { firstName } = this.state
    const validationError = "Must be longer than 2 characters!"
    this.setState({
      firstNameErr: firstName.length > 2 ? "" : validationError
    })
  }
  validateLastName = () => {
    const { lastName } = this.state
    const validationError = "Must be longer than 2 characters!"
    this.setState({
      lastNameErr: lastName.length > 2 ? "" : validationError
    })
  }

  validateEmail = () => {
    const { email } = this.state
    const validationError = "Must be longer than 2 characters!"
    this.setState({
      emailErr: email.length > 2 ? "" : validationError
    })
  }
  validateUserName = () => {
    const { userName } = this.state
    const validationError = "Must be longer than 2 characters!"
    this.setState({
      userNameErr: userName.length > 2 ? "" : validationError
    })
  }
  validatePassword = () => {
    const { password } = this.state
    const validationError = "Must be longer than 2 characters!"
    this.setState({
      passwordErr: password.length > 2 ? "" : validationError
    })
  }
  validateConfirmPassword = () => {
    const { confirmPassword } = this.state
    const validationError = "Must be longer than 2 characters!"
    this.setState({
      confirmPasswordErr: confirmPassword.length > 2 ? "" : validationError
    })
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardText className="text-dark">Tell us about yourself!</CardText>
        </CardHeader>
        <input
          className="form-control register-form"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleFirstName}
          onBlur={this.validateFirstName}
        />
        <label className="validation-text">{this.state.firstNameErr}</label>
        <input
          className="form-control register-form"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleLastName}
          onBlur={this.validateLastName}
        />
        <label className="validation-text">{this.state.lastNameErr}</label>
        <input
          className="form-control register-form"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmail}
          onBlur={this.validateEmail}
        />
        <label className="validation-text">{this.state.emailErr}</label>
        <input
          className="form-control register-form"
          placeholder="UserName"
          value={this.state.userName}
          onChange={this.handleUserName}
          onBlur={this.validateUserName}
        />
        <label className="validation-text">{this.state.userNameErr}</label>
        <input
          className="form-control register-form"
          placeholder="Image Url (optional)"
        />
        <label></label>
        <input
          className="form-control register-form"
          placeholder="Password"
          type="password"
          value={this.state.password}
          onChange={this.handlePassword}
          onBlur={this.validatePassword}
        />
        <label className="validation-text">{this.state.passwordErr}</label>
        <input
          className="form-control register-form"
          type="password"
          placeholder="Confirm Password"
          value={this.state.confirmPassword}
          onChange={this.handleConfirmPassword}
          onBlur={this.validateConfirmPasssword}
        />
        <label className="validation-text">{this.state.confirmPasswordErr}</label>
        <button 
          className="btn btn-primary"
          onClick={this.sendRegistration}
        >Submit</button>
      </Card>
    );
  }

}
