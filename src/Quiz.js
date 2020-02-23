import React, { Component} from 'react';

import QuizQuestion from './QuizQuestion';
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
      let text1 = quizData.quiz_questions.filter(q => q.id === 1);
      let text2 = quizData.quiz_questions.instruction_text;//filter(q => q.id === 1);
      console.log("text1:"+text1.instruction_text);
      console.log("text2:"+text2);
      console.log("quizData.quiz_questions.instruction_text:"+quizData.quiz_questions.instruction_text);
      
     // let quiz_question = quizData.quiz_questions[this.state.quiz_position - 1];
      return (
            // <div className = "QuizQuestion">        
            // {quizData.quiz_questions[0].instruction_text}
            // {/* {quizData.quiz_questions.filter(q => q.id === 1).instruction_text}     */}
            // </div>
            // <div className = "QuizQuestion">
            //   <QuizQuestion {...quiz_question} />
            //   </div>
            // <QuizQuestion {...quiz_question} />
            <div>
             <QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position - 1]} />
            </div>
          );
    }
}
 
export default Quiz;