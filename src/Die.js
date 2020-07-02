import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numbers: ["one", "two", "three", "four", "five", "six"],
    val: 6
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(evt) {
    this.props.handleClick(this.props.idx);
  } 

  
  render() {
    const {numbers, locked, val, disabled, rolling} = this.props;
    let img = `Die fas fa-dice-${numbers[val - 1]} fa-5x `;
    if (locked) img += `Die-locked `;
    if(rolling && (locked === false)) img += `Die-rolling`;
    return (
      <i className={img} onClick={this.handleClick} disabled={disabled} />
    );
  }
}

export default Die;
