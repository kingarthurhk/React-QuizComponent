import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';


class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (   
        <main>
            <section>
              <p>
                  {/* //instruction text goes here */}
                  {this.props.quiz_question.instruction_text }
              </p>
            </section>
            <section className="buttons">
              <ul>
                  {/* <li>{this.props.quiz_question.answer_options[0]}</li> */}
                {/* //quiz question button logic goes here */}
                <QuizQuestionButton button_text = {this.props.quiz_question.answer_options[0]} />
              </ul>
            </section>
          </main> );
    }
}
 
export default QuizQuestion;