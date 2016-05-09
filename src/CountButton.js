import React, { Component } from 'react';
import h from 'react-hyperscript';


export default class CountButton extends Component {
  render() {
    return (
      h('input',{type:"button",value:"countup",onClick:this.props.action.countUp})
    );
  }
}
