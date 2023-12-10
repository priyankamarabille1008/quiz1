// import "./index.js";
import React, { useEffect } from 'react';
import Question from "./Questions";

function getResult(event) {
  let val1 = event.target.q1.value;
  let val2 = event.target.q2.value;
  let val3 = event.target.q3.value;
  let val4=event.target.q4.value;
  let val5=event.target.q5.value;
  let val6=event.target.q6.value;
  let val7=event.target.q7.value;
  let val8=event.target.q8.value;
  let val9=event.target.q9.value;
  let val10=event.target.q10.value;
  let marks = 0;
  if (val1 === "C.8") {
    marks++;
  }
  if (val2 === "A.32 and 64") {
    marks++;
  }
  if (val3 === "B.Int to Long") {
    marks++;
  }
  if (val4 === "B.char[] ch = new char[5]") {
    marks++;
  }
  if (val5 === "A.The reference of the array") {
    marks++;
  }
  if (val6 === "B.int[] A = {1, 2, 3}") {
    marks++;
  }
  if (val7 === "B.objects") {
    marks++;
  }
  if (val8 === "A.At run time") {
    marks++;
  }
  if (val9 === "C.A package is a collection of classes and interfaces") {
    marks++;
  }
  if (val10 === "B.Static") {
    marks++;
  }
  alert("Total Marks= " + marks);
}

// window.onload = function () {
//   window.setTimeout(function () {
//     document.getElementById("quizForm").submit();
//   }, 5);
//   alert("Time Out");
// }


function JavaQuetions() {

  return (
    <div classNmae="java">

      <h2>Java Practice Question</h2><hr></hr>

      <form onSubmit={getResult} id='quizForm'>
        <Question
          ques="Number of primitive data types in Java are?"
          op1="A.6"
          op2="B.7"
          op3="C.8"
          op4="D.9"
          name="q1"

        /><hr></hr>
        <Question
          ques=" 
              What is the size of float and double in java?"
          op1="A.32 and 64"
          op2="B.64 and 64"
          op3="C.32 and 32"
          op4="D.64 and 32"
          name="q2"

        /><hr></hr>
        <Question
          ques=" 
              Automatic type conversion is possible in which of the possible cases?"
          op1="A.Byte to Int"
          op2="B.Int to Long"
          op3="C.Long to Int"
          op4="D.Short to Int"
          name="q3"
        />
        <hr />
        <Question
          ques=" 
              Select the valid statement."
          op1="A.char[] ch = new char(5)"
          op2="B.char[] ch = new char[5]"
          op3="C.char[] ch = new char()"
          op4="D.char[] ch = new char[]"
          name="q4"
        />
        <Question
          ques=" 
              When an array is passed to a method, what does the method receive?"
          op1="A.The reference of the array"
          op2="B.A copy of the array"
          op3="C.Length of the array"
          op4="D.Copy of first element"
          name="q5"
        />
        <Question
          ques=" 
          Select the valid statement to declare and initialize an array.?"
          op1="A.int[] A = {}"
          op2="B.int[] A = {1, 2, 3}"
          op3="C.int[] A = (1, 2, 3)"
          op4="D.int[][] A = {1,2,3}"
          name="q6"
        />
        <Question
          ques=" 
              Arrays in java are-"
          op1="A.Object references"
          op2="B.objects"
          op3="C.Primitive data typet"
          op4="D.none"
          name="q7"
        />
        <Question
          ques=" 
          When is the object created with new keyword?"
          op1="A.At run time"
          op2="B.At compile time"
          op3="C.Depends on the code"
          op4="D.None"
          name="q8"
        />
        <Question
          ques=" 
            Identify the corrected definition of a package."
          op1="A.A package is a collection of editing tools"
          op2="B.A package is a collection of classes"
          op3="C.A package is a collection of classes and interfaces"
          op4="D.A package is a collection of interfaces"
          name="q9"
        />
        <Question
          ques=" 
            Identify the keyword among the following that makes a variable belong to a class,rather than being defined for each instance of the class."
          op1="A.Final"
          op2="B.Static"
          op3="C.Volatile"
          op4="D.abstract"
          name="q10"
        />
        <input type='submit' value="getResult" ></input>
      </form>
    </div>
  );
}


export default JavaQuetions;