import React, { Component } from 'react';
import h from 'react-hyperscript';
import CountButton from './CountButton';
import Display from './Display';
let action = {}

export default class Container extends Component {
  constructor() {
    super();
    this.state = {}
    this.state.count = 0

    action.countUp = ()=>{
      this.setState({count:this.state.count+1})
    }
  }
  render() {
    return (
      h('div',[
        h(CountButton,{action:action}),
        h(Display,{state:this.state})
      ])
    );
  }
}
