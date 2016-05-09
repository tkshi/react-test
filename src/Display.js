import React, { Component } from 'react';
import h from 'react-hyperscript';


export default class Display extends Component {
  render() {
    return (
      h('h1',`aaaaa${this.props.state.count}`)
    );
  }
}
