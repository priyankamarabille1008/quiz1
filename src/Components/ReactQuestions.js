// ReactQuestions.js
import React from 'react';
import Question from "./Questions";

function ReactQuestions() {

  function getResult(event) {
    let val1 = event.target.q1.value;
    let val2 = event.target.q2.value;
    let val3 = event.target.q3.value;
    let val4 = event.target.q4.value;
    let val5 = event.target.q5.value;
    let val6 = event.target.q6.value;
    let val7 = event.target.q7.value;
    let val8 = event.target.q8.value;
    let val9 = event.target.q9.value;
    let val10 = event.target.q10.value;
    let marks = 0;

    if (val1 === "A. Components") {
      marks++;
    }
    if (val2 === "C. JSX") {
      marks++;
    }
    if (val3 === "B. Virtual DOM") {
      marks++;
    }
    if (val4 === "D. All of the above") {
      marks++;
    }
    if (val5 === "A. State") {
      marks++;
    }
    if (val6 === "C. props") {
      marks++;
    }
    if (val7 === "B. Component Lifecycle") {
      marks++;
    }
    if (val8 === "D. Event handling") {
      marks++;
    }
    if (val9 === "B. ReactDOM.render()") {
      marks++;
    }
    if (val10 === "A. useState") {
      marks++;
    }
    alert("Total Marks= " + marks);
  }

  return (
    <div className="react">
      <h2>React.js Practice Questions</h2>
      <hr></hr>

      <form onSubmit={getResult} id='quizForm'>
        <Question
          ques="What is the core building block of a React application?"
          op1="A. Components"
          op2="B. Modules"
          op3="C. Services"
          op4="D. Libraries"
          name="q1"
        /><hr></hr>

        <Question
          ques="What syntax extension is used for writing React components?"
          op1="A. HTML"
          op2="B. XML"
          op3="C. JSX"
          op4="D. JSON"
          name="q2"
        /><hr></hr>

        <Question
          ques="React optimizes updates by using a virtual DOM. What is the purpose of the virtual DOM?"
          op1="A. Improved browser performance"
          op2="B. Reduced memory usage"
          op3="C. Better rendering efficiency"
          op4="D. All of the above"
          name="q3"
        /><hr></hr>

        <Question
          ques="Which of the following is NOT a React lifecycle method?"
          op1="A. componentDidMount"
          op2="B. componentWillUpdate"
          op3="C. componentWillMount"
          op4="D. componentDidUnmount"
          name="q4"
        /><hr></hr>

        <Question
          ques="In React, where should you store component-specific data that changes over time?"
          op1="A. Props"
          op2="B. Global state"
          op3="C. Local state"
          op4="D. Redux store"
          name="q5"
        /><hr></hr>

        <Question
          ques="What is used to pass data to a component from its parent?"
          op1="A. setState"
          op2="B. useContext"
          op3="C. props"
          op4="D. ref"
          name="q6"
        /><hr></hr>

        <Question
          ques="Which aspect of React.js allows you to reuse component logic?"
          op1="A. Hooks"
          op2="B. Context"
          op3="C. Higher-order components"
          op4="D. Props"
          name="q7"
        /><hr></hr>

        <Question
          ques="What is used in React to handle events?"
          op1="A. event handler"
          op2="B. EventDispatcher"
          op3="C. EventManager"
          op4="D. Event handling"
          name="q8"
        /><hr></hr>

        <Question
          ques="Which method is used to render a React element into the DOM?"
          op1="A. React.render()"
          op2="B. ReactDOM.renderElement()"
          op3="C. ReactDOM.renderToDOM()"
          op4="D. ReactDOM.render()"
          name="q9"
        /><hr></hr>

        <Question
          ques="Which hook is used to manage state in a functional component?"
          op1="A. useState"
          op2="B. useReducer"
          op3="C. useContext"
          op4="D. useEffect"
          name="q10"
        />

        <input type='submit' value="Get Result"></input>
      </form>
    </div>
  );
}

export default ReactQuestions;
