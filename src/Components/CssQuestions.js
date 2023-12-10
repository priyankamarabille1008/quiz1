// CSSQuestions.js
import React from 'react';
import Question from "./Questions";


function CSSQuestions() {

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

    if (val1 === "B. Cascading Style Sheets") {
      marks++;
    }
    if (val2 === "A. padding") {
      marks++;
    }
    if (val3 === "C. class") {
      marks++;
    }
    if (val4 === "D. All of the above") {
      marks++;
    }
    if (val5 === "B. margin") {
      marks++;
    }
    if (val6 === "A. #FFFFFF") {
      marks++;
    }
    if (val7 === "C. font-size") {
      marks++;
    }
    if (val8 === "D. flexbox") {
      marks++;
    }
    if (val9 === "B. background-color") {
      marks++;
    }
    if (val10 === "A. Float") {
      marks++;
    }
    alert("Total Marks= " + marks);
  }

  return (
    <div className="css">
      <h2>CSS Practice Questions</h2>
      <hr></hr>

      <form onSubmit={getResult} id='quizForm'>
        <Question
          ques="What does CSS stand for?"
          op1="A. Computer Style Sheets"
          op2="B. Cascading Style Sheets"
          op3="C. Colorful Style Sheets"
          op4="D. Creative Style Sheets"
          name="q1"
        /><hr></hr>

        <Question
          ques="Which CSS property is used to control the space between the content and border of an element?"
          op1="A. padding"
          op2="B. margin"
          op3="C. border-spacing"
          op4="D. space-padding"
          name="q2"
        /><hr></hr>

        <Question
          ques="Which CSS selector is used to select elements with a specific class?"
          op1="A. #id"
          op2="B. *"
          op3="C. class"
          op4="D. .class"
          name="q3"
        /><hr></hr>

        <Question
          ques="Which of the following is true about CSS?"
          op1="A. CSS stands for Computer Style Sheets"
          op2="B. CSS is used to enhance the functionality of HTML"
          op3="C. CSS is a markup language"
          op4="D. All of the above"
          name="q4"
        /><hr></hr>

        <Question
          ques="Which CSS property is used to create space around elements, but outside of their border?"
          op1="A. margin"
          op2="B. padding"
          op3="C. border"
          op4="D. space"
          name="q5"
        /><hr></hr>

        <Question
          ques="What is the hexadecimal code for the color white?"
          op1="A. #000000"
          op2="B. #FFFFFF"
          op3="C. #FF0000"
          op4="D. #00FF00"
          name="q6"
        /><hr></hr>

        <Question
          ques="Which CSS property is used to change the size of text?"
          op1="A. font-family"
          op2="B. text-size"
          op3="C. font-size"
          op4="D. text-family"
          name="q7"
        /><hr></hr>

        <Question
          ques="Which CSS feature is used to create a flexible box layout?"
          op1="A. grid"
          op2="B. flex"
          op3="C. position"
          op4="D. flexbox"
          name="q8"
        /><hr></hr>

        <Question
          ques="Which CSS property is used to set the background color of an element?"
          op1="A. color"
          op2="B. background"
          op3="C. background-color"
          op4="D. background-style"
          name="q9"
        /><hr></hr>

        <Question
          ques="Which CSS property is used to align elements side by side, allowing them to float?"
          op1="A. Float"
          op2="B. Align"
          op3="C. Side"
          op4="D. Float-side"
          name="q10"
        />

        <input className='getResult-btn' type='submit' value="Get Result"></input>
      </form>
    </div>
  );
}

export default CSSQuestions;
