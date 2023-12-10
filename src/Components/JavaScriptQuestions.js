// JavaScriptQuestions.js
import React from 'react';
import Question from "./Questions";

function JavaScriptQuestions() {

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

    if (val1 === "C.7") {
      marks++;
    }
    if (val2 === "B. ECMAScript") {
      marks++;
    }
    if (val3 === "A. True") {
      marks++;
    }
    if (val4 === "D. Both A and B") {
      marks++;
    }
    if (val5 === "C. undefined") {
      marks++;
    }
    if (val6 === "A. NaN") {
      marks++;
    }
    if (val7 === "B. JavaScript is a dynamically typed language") {
      marks++;
    }
    if (val8 === "C. Hoisting") {
      marks++;
    }
    if (val9 === "A. var") {
      marks++;
    }
    if (val10 === "B. Object-oriented") {
      marks++;
    }
    alert("Total Marks= " + marks);
  }

  return (
    <div className="javascript">
      <h2>JavaScript Practice Questions</h2>
      <hr></hr>

      <form onSubmit={getResult} id='quizForm'>
        <Question
          ques="How many primitive data types are there in JavaScript?"
          op1="A.4"
          op2="B.5"
          op3="C.7"
          op4="D.8"
          name="q1"
        /><hr></hr>

        <Question
          ques="What does ECMAScript stand for?"
          op1="A. European Computer Manufacturers Association Script"
          op2="B. ECMAScript"
          op3="C. Every Computer Made As Script"
          op4="D. Electronic Computer Machines Are Scripting Programming Language"
          name="q2"
        /><hr></hr>

        <Question
          ques="In JavaScript, the expression '2' == 2 is:"
          op1="A. False"
          op2="B. True"
          op3="C. Undefined"
          op4="D. Null"
          name="q3"
        /><hr></hr>

        <Question
          ques="What is the result of the expression ('5' + 2) in JavaScript?"
          op1="A. 7"
          op2="B. '5' + 2"
          op3="C. 52"
          op4="D. Both A and B"
          name="q4"
        /><hr></hr>

        <Question
          ques="The value of a variable declared using var but not assigned a value is:"
          op1="A. 0"
          op2="B. null"
          op3="C. undefined"
          op4="D. NaN"
          name="q5"
        /><hr></hr>

        <Question
          ques="What does the expression 5 / 'abc' return in JavaScript?"
          op1="A. 5"
          op2="B. 'abc'"
          op3="C. NaN"
          op4="D. Error"
          name="q6"
        /><hr></hr>

        <Question
          ques="Which of the following statements about JavaScript is false?"
          op1="A. JavaScript is a statically typed language"
          op2="B. JavaScript is a dynamically typed language"
          op3="C. JavaScript is an object-oriented language"
          op4="D. JavaScript is a scripting language"
          name="q7"
        /><hr></hr>

        <Question
          ques="What is the term used for the variable and function declarations moved to the top of their containing scope in JavaScript?"
          op1="A. Declaration"
          op2="B. Definition"
          op3="C. Hoisting"
          op4="D. Lifting"
          name="q8"
        /><hr></hr>

        <Question
          ques="In JavaScript, which keyword is used to declare a variable that is block-scoped?"
          op1="A. let"
          op2="B. const"
          op3="C. Hoisting"
          op4="D. var"
          name="q9"
        /><hr></hr>

        <Question
          ques="JavaScript is considered to be a ____ language."
          op1="A. Procedural"
          op2="B. Object-oriented"
          op3="C. Functional"
          op4="D. Scripting"
          name="q10"
        />

        <input type='submit' value="Get Result"></input>
      </form>
    </div>
  );
}

export default JavaScriptQuestions;
