function Question(props) {
  
    return (
      // <div>
      //   <h3>{props.ques}</h3>
      //   <h5>{props.op1}</h5>
      //   <h5>{props.op2}</h5>
      //   <h5>{props.op3}</h5>
      // </div>
      <div>
        <h3>{props.ques}</h3>
        <input type='radio' name={props.name} value={props.op1}  /><label>{props.op1}</label><br></br>
        <input type='radio' name={props.name} value={props.op2} /><label>{props.op2}</label><br></br>
        <input type='radio' name={props.name} value={props.op3} /><label>{props.op3}</label><br></br>
        <input type='radio' name={props.name} value={props.op4} /><label>{props.op4}</label><br></br>
      </div>
    );
  }

  export default Question;