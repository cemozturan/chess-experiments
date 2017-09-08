import React, { Component } from 'react';
import Board from './board';
import Problems from '../problems';

class Question extends Component {
  render() {
    const problem = Problems[this.props.questionIndex];
    return (
      <div>
        <h4>Question no: {problem.id}</h4>
        <Board fen={problem.FEN}/>
      </div>
    );
  }
}

export default Question;
