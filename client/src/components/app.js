import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
          Header
          {this.props.children}
          Footer
      </div>
    );
  }
}
