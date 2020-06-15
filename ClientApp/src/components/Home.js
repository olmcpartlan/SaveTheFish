import React, { Component } from 'react';
import Login from './Login';
import { Row, Col } from 'reactstrap';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginVisible: false
    }
  }

  showLogin = () => {
    this.setState({
      loginVisible: !this.state.loginVisible
    })
  }

  render () {
    return (
      <div>
        <Row>
          <Col>
          </Col>
          <Col className="home-login-col">
            <h3><a href="javascript:void;" className="" onClick={this.showLogin}>Login</a></h3>
            {!this.state.loginVisible ? null : 
              <Login/>
            }

          </Col>
        </Row>
      </div>
    );
  }
}