import React, { Component } from 'react';


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
                  {this.props.instruction_text }
              </p>
            </section>
            <section className="buttons">
              <ul>
                  {this.props.answer_options[0]}
                {/* //quiz question button logic goes here */}
              </ul>
            </section>
          </main> );
    }
}
 
export default QuizQuestion;