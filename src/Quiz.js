import React, { Component} from 'react';

let quizData = require('./quiz_data.json')


class Quiz extends Component {
 
constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {quiz_position:1 };
 
  }
    
    render() {
      
      let text = quizData.quiz_questions.filter(q => q.id === this.state.quiz_position);
      console.log("texttext.instruction_text:"+text.instruction_text);
      console.log("quizData"+quizData);
      console.log("quizData.instruction_text"+quizData.instruction_text);
      console.log("quizData.quiz_questions:"+quizData.quiz_questions);
      console.log("quizData.quiz_questions.instruction_text:"+quizData.quiz_questions.instruction_text);
        return (
            <div className = "QuizQuestion">        {text.instruction_text}Quiz
    
            
            
            </div>
          );
    }
}
 
export default Quiz;