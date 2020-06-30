import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  constructor(props) {
    super(props);
    this.doScore = this.doScore.bind(this);
  }
  
  doScore(evt) {
    if(this.props.score === undefined) {
      this.props.doScore();
    }
  }

  render() {
    return (
      <tr className={`RuleRow ${this.props.score === undefined ? 'RuleRow-active' : 'RuleRow-disabled'}`} onClick={this.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">
          {this.props.score === undefined
            ? this.props.description
            : this.props.score}
        </td>
      </tr>
    )
  }
}

export default RuleRow;