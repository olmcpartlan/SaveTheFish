import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardHeader, CardTitle, CardFooter } from 'reactstrap';
import { faHome, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      email: "",
      password: ""
    }
  }

  checkEmail = () => {
    // send a request to find the email entered
    // while it's requesting, display a loading icon 
    // if it's a match, display a green check
    // else show a validation method
  }

  checkPassword = () => {
    // request here to confirm password matches account
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }
 
  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return(
      <Card className="login-card">
        <CardHeader>
          <FontAwesomeIcon 
            className="spinner" 
            icon="faSpinner" 
            spin
          />
          <CardTitle className="text-dark">Login</CardTitle>
        </CardHeader>
        <CardBody>
          <input
            placeholder="UserName or Email"
            className="form-control login-form"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <input 
            placeholder="Password" 
            type="password" 
            className="form-control login-form"
            value={this.state.password}
            onChange={this.handlePassword}
            />

          <button 
            className="btn btn-primary"
          >Login</button>
        </CardBody>
        <CardFooter>
          <CardText className="text-dark">New around here? </CardText>
            <Link to="/register">Register</Link>
        </CardFooter>
      </Card>
    );
  }

}
/* 
import React from "react";
import { render } from "react-dom";

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// create our App
const App = () => (
  <div>
    <FontAwesomeIcon icon={faHome} />
  </div>
);

// render to #root
render(<App />, document.getElementById("root"));
*/