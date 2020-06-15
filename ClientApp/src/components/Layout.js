import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { OceanEffect } from 'react-background-animation';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className="body">
        <NavMenu />
        <OceanEffect/>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}