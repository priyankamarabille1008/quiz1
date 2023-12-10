// import "./index.js";
import React, { useEffect } from 'react';
import Question from "./Questions";

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
    if (val1 === "B. Hello, World!") {
        marks++;
    }
    if (val2 === "C. # This is a comment") {
        marks++;
    }
    if (val3 === "D. All of the above") {
        marks++;
    }
    if (val4 === "B. def my_function():") {
        marks++;
    }
    if (val5 === "D. 26") {
        marks++;
    }
    if (val6 === "D. list") {
        marks++;
    }
    if (val7 === "A. It initializes the class variables") {
        marks++;
    }
    if (val8 === "C. Lists can contain elements of different data types") {
        marks++;
    }
    if (val9 === "B. False") {
        marks++;
    }
    if (val10 === "A. input()") {
        marks++;
    }
    
    alert("Total Marks= " + marks);
}

// window.onload = function () {
//   window.setTimeout(function () {
//     document.getElementById("quizForm").submit();
//   }, 5000);
//   alert("Time Out");
// }


function PythonQuetions() {

    return (
        <div classNmae="python">

            <h2>Python Practice Question</h2><hr></hr>

            <form onSubmit={getResult} id='quizForm'>
                <Question
                    ques="What is the output of the following code snippet?
                    print(2 ** 3)"
                    op1="A. Hello, World!"
                    op2="B. SyntaxError"
                    op3="C. None"
                    op4="D. 42"
                    name="q1"
                />

                <Question
                    ques="How do you comment multiple lines in Python?"
                    op1="A. /* This is a comment */"
                    op2="B. // This is a comment"
                    op3="C. # This is a comment"
                    op4="D. <!-- This is a comment"
                    name="q2"
                />

                <Question
                    ques="What is the purpose of the `len()` function in Python?"
                    op1="A. Returns the length of a string"
                    op2="B. Returns the length of a list"
                    op3="C. Returns the length of a dictionary"
                    op4="D. All of the above"
                    name="q3"
                />

                <Question
                    ques="Which of the following is a correct way to define a function in Python?"
                    op1="A. function my_function():"
                    op2="B. def my_function():"
                    op3="C. define my_function():"
                    op4="D. func my_function():"
                    name="q4"
                />

                <Question
                    ques="What is the result of the expression `3 + 5 * 2` in Python?"
                    op1="A. 16"
                    op2="B. 13"
                    op3="C. 11"
                    op4="D. 26"
                    name="q5"
                />
                <Question
                    ques="Which of the following data types is mutable in Python?"
                    op1="A. int"
                    op2="B. float"
                    op3="C. tuple"
                    op4="D. list"
                    name="q6"
                />

                <Question
                    ques="What is the purpose of the `__init__` method in a Python class?"
                    op1="A. It initializes the class variables"
                    op2="B. It is used for garbage collection"
                    op3="C. It is a reserved keyword for loops"
                    op4="D. It defines the main function of the class"
                    name="q7"
                />

                <Question
                    ques="Which of the following statements is true about Python's list?"
                    op1="A. Lists are immutable"
                    op2="B. Elements in a list must be of the same data type"
                    op3="C. Lists can contain elements of different data types"
                    op4="D. Lists cannot be nested"
                    name="q8"
                />

                <Question
                    ques="What will be the output of the following code snippet?"
                    op1="A. True"
                    op2="B. False"
                    op3="C. Error"
                    op4="D. None"
                    name="q9"
                />

                <Question
                    ques="Which of the following is used to read input from the user in Python?"
                    op1="A. input()"
                    op2="B. read()"
                    op3="C. scan()"
                    op4="D. get()"
                    name="q10"
                />

                {/* Add more questions here as needed */}

                <input type='submit' value="getResult" ></input>
            </form>
        </div>
    );
}



export default PythonQuetions;