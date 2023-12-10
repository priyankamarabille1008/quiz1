// HTMLQuestions.js
import React from 'react';
import Question from "./Questions";

function HTMLQuestions() {

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

    if (val1 === "C. HyperText Markup Language") {
      marks++;
    }
    if (val2 === "B. <head>") {
      marks++;
    }
    if (val3 === "A. World Wide Web Consortium") {
      marks++;
    }
    if (val4 === "D. All of the above") {
      marks++;
    }
    if (val5 === "C. <br>") {
      marks++;
    }
    if (val6 === "B. <ol>") {
      marks++;
    }
    if (val7 === "A. img") {
      marks++;
    }
    if (val8 === "C. alt") {
      marks++;
    }
    if (val9 === "B. Italic") {
      marks++;
    }
    if (val10 === "A. Semantic") {
      marks++;
    }
    alert("Total Marks= " + marks);
  }

  return (
    <div className="html">
      <h2>HTML Practice Questions</h2>
      <hr></hr>

      <form onSubmit={getResult} id='quizForm'>
        <Question
          ques="What does HTML stand for?"
          op1="A. HyperText and links Markup Language"
          op2="B. HyperText Markup Language"
          op3="C. HyperText Markup Language"
          op4="D. HyperText Markup Links"
          name="q1"
        /><hr></hr>

        <Question
          ques="Which HTML tag is used to define the head of a document?"
          op1="A. <header>"
          op2="B. <head>"
          op3="C. <top>"
          op4="D. <document>"
          name="q2"
        /><hr></hr>

        <Question
          ques="Who is the primary organization that develops and maintains HTML standards?"
          op1="A. Internet Engineering Task Force (IETF)"
          op2="B. World Wide Web Consortium (W3C)"
          op3="C. Internet Society (ISOC)"
          op4="D. Web Hypertext Application Technology Working Group (WHATWG)"
          name="q3"
        /><hr></hr>

        <Question
          ques="Which of the following is true about HTML5?"
          op1="A. It requires a plugin for audio and video playback"
          op2="B. It has new parsing rules for enhanced flexibility"
          op3="C. It is not backwards compatible with previous HTML versions"
          op4="D. All of the above"
          name="q4"
        /><hr></hr>

        <Question
          ques="Which HTML tag is used for a line break?"
          op1="A. <break>"
          op2="B. <lb>"
          op3="C. <br>"
          op4="D. <newline>"
          name="q5"
        /><hr></hr>

        <Question
          ques="Which HTML tag is used to create an ordered list?"
          op1="A. <ul>"
          op2="B. <ol>"
          op3="C. <li>"
          op4="D. <dl>"
          name="q6"
        /><hr></hr>

        <Question
          ques="Which HTML tag is used to embed an image in a webpage?"
          op1="A. picture"
          op2="B. img"
          op3="C. embed"
          op4="D. image"
          name="q7"
        /><hr></hr>

        <Question
          ques="What attribute is used in the <img> tag to provide alternative text for an image?"
          op1="A. alt"
          op2="B. title"
          op3="C. description"
          op4="D. text"
          name="q8"
        /><hr></hr>

        <Question
          ques="Which HTML tag is used to make text italic?"
          op1="A. bold"
          op2="B. underline"
          op3="C. italic"
          op4="D. em"
          name="q9"
        /><hr></hr>

        <Question
          ques="What does the term 'Semantic HTML' refer to?"
          op1="A. HTML with a lot of tags"
          op2="B. HTML that is semantically incorrect"
          op3="C. HTML that is structured and meaningful"
          op4="D. HTML with semantic errors"
          name="q10"
        />

        <input type='submit' value="Get Result"></input>
      </form>
    </div>
  );
}

export default HTMLQuestions;
