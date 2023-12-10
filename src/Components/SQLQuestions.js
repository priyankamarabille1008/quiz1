// SQLQuestions.js
import React from 'react';

import Question from "./Questions";

function SQLQuestions() {

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

    if (val1 === "C. SELECT") {
      marks++;
    }
    if (val2 === "B. WHERE") {
      marks++;
    }
    if (val3 === "A. INSERT INTO") {
      marks++;
    }
    if (val4 === "D. DELETE FROM") {
      marks++;
    }
    if (val5 === "C. GROUP BY") {
      marks++;
    }
    if (val6 === "B. INNER JOIN") {
      marks++;
    }
    if (val7 === "A. CREATE TABLE") {
      marks++;
    }
    if (val8 === "D. ORDER BY") {
      marks++;
    }
    if (val9 === "B. UPDATE") {
      marks++;
    }
    if (val10 === "A. SELECT DISTINCT") {
      marks++;
    }
    alert("Total Marks= " + marks);
  }

  return (
    <div className="sql">
      <h2>SQL Practice Questions</h2>
      <hr></hr>

      <form onSubmit={getResult} id='quizForm'>
        <Question
          ques="Which SQL statement is used to retrieve data from a database?"
          op1="A. GET"
          op2="B. FETCH"
          op3="C. SELECT"
          op4="D. RETRIEVE"
          name="q1"
        /><hr></hr>

        <Question
          ques="Which SQL clause is used to filter the results of a query?"
          op1="A. FILTER"
          op2="B. WHERE"
          op3="C. SELECT WHERE"
          op4="D. LIMIT"
          name="q2"
        /><hr></hr>

        <Question
          ques="Which SQL statement is used to insert new data into a database?"
          op1="A. ADD"
          op2="B. INSERT"
          op3="C. INSERT INTO"
          op4="D. CREATE"
          name="q3"
        /><hr></hr>

        <Question
          ques="Which SQL statement is used to delete data from a database?"
          op1="A. REMOVE"
          op2="B. DELETE"
          op3="C. REMOVE FROM"
          op4="D. DELETE FROM"
          name="q4"
        /><hr></hr>

        <Question
          ques="Which SQL clause is used to group the results of a query by one or more columns?"
          op1="A. GROUP"
          op2="B. SORT BY"
          op3="C. GROUP BY"
          op4="D. ARRANGE BY"
          name="q5"
        /><hr></hr>

        <Question
          ques="Which SQL clause is used to combine rows from two or more tables based on a related column between them?"
          op1="A. COMBINE"
          op2="B. JOIN"
          op3="C. MERGE"
          op4="D. CONNECT"
          name="q6"
        /><hr></hr>

        <Question
          ques="Which SQL statement is used to create a new table in a database?"
          op1="A. CREATE TABLE"
          op2="B. NEW TABLE"
          op3="C. INSERT TABLE"
          op4="D. MAKE TABLE"
          name="q7"
        /><hr></hr>

        <Question
          ques="Which SQL clause is used to sort the results of a query in ascending or descending order?"
          op1="A. ARRANGE BY"
          op2="B. SORT"
          op3="C. ORDER"
          op4="D. ORDER BY"
          name="q8"
        /><hr></hr>

        <Question
          ques="Which SQL statement is used to modify existing data in a database?"
          op1="A. MODIFY"
          op2="B. CHANGE"
          op3="C. UPDATE"
          op4="D. ALTER"
          name="q9"
        /><hr></hr>

        <Question
          ques="Which SQL statement is used to retrieve only distinct values from a column?"
          op1="A. SELECT UNIQUE"
          op2="B. SELECT DISTINCT"
          op3="C. SELECT DIFFERENT"
          op4="D. SELECT UNIQUE VALUES"
          name="q10"
        />

        <input type='submit' value="Get Result"></input>
      </form>
    </div>
  );
}

export default SQLQuestions;
