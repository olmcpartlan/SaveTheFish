import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardHeader, CardTitle, CardFooter } from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
  }

  render() {
    return(
      <Card className="login-card">
        <CardHeader>
          <CardTitle className="text-dark">Login</CardTitle>
        </CardHeader>
        <CardBody>
          <input
            placeholder="UserName or Email"
            className="form-control login-form"/>
          <input 
            placeholder="Password" 
            type="password" 
            className="form-control login-form"/>
          <button className="btn btn-primary">Login</button>
        </CardBody>
        <CardFooter>
          <CardText className="text-dark">New around here? </CardText>
            <Link to="/register">Register</Link>
        </CardFooter>
      </Card>
    );
  }

}