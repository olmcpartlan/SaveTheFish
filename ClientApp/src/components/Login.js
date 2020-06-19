import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardHeader, CardTitle, CardFooter } from 'reactstrap';
import { faHome, faSpinner, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      email: "",
      password: "",
      checkingEmail: false,
      emailStatus: "",
      emailIcon: faSpinner,
      spinningIcon: "fa-spin"

    }
  }

  checkEmail = () => {
    // checkingEmail: true  will show the email spinner
    this.setState({
      checkingEmail: true,
      emailStatus: "Checking Email"
    });


    // send a request to find the email entered in the db
    fetch('/api/checkemail', {
      method: 'POST',
      headers: {
        "Access-Conrol-Allow-Origin": "*",
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({
        "email": this.state.email,
      })
    })
    .then(res => res.json())
    .then(res => {
      if(res['isMatch'])
      {
        this.setState({
          emailStatus: "",
          spinningIcon: "fa-success",
          emailIcon: faCheck
        });
      }
      else 
      {
        this.setState({
          emailStatus: "Email not found",
          emailIcon: faTimes,
          spinningIcon: "fa-failure"
        });
      }
    })

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
          <CardTitle className="text-dark">Login</CardTitle>
        </CardHeader>
        <CardBody>
          <input
            placeholder="Email"
            className="form-control login-form"
            value={this.state.email}
            onChange={this.handleEmail}
            onBlur={this.checkEmail}
          />
          <CardText className="black-text">{this.state.emailStatus} 
          {this.state.checkingEmail &&
              <FontAwesomeIcon 
                icon={this.state.emailIcon}
                className={this.state.spinningIcon}
              />

          }

          </CardText>
          <input 
            placeholder="Password" 
            type="password" 
            className="form-control login-form"
            value={this.state.password}
            onChange={this.handlePassword}
            />

          <button 
            className="btn btn-primary"
            onClick={this.checkEmail}
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