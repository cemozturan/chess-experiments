import React, { Component } from 'react';
import Question from './components/question';
import { ProblemsCount } from './problems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0
    }
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleNextClick() {
    this.setState(function(prevState) {
      var currentIndex = prevState.questionIndex;
      return ({
        questionIndex: currentIndex === ProblemsCount - 1 ? 0 : prevState.questionIndex + 1
      });
    })
  }

  render() {
    return (
      <div>
        <Question questionIndex={this.state.questionIndex}/>
        <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default App;
