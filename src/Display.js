import React, { Component } from 'react';
import h from 'react-hyperscript';
import c from './style.css';


export default class Display extends Component {
  render() {
    return (
      h('div',[
        h('h1',{className:c.blue},`aaaaa${this.props.state.count}`),
        h('div',{className:c.back})
      ])
    );
  }
}
