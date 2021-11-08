import React, { useState } from "react";
// Styled Components
import styled from "styled-components";
// Components
import Button from "../../UI/Button/Button";
// Styles
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  &form-control label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  &form-control input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  &form-control input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &form-control.invalid input {
    border-color: red;
    background: rgb(250, 165, 156);
  }

  &form-control.invalid label {
    color: red;
  }
`;

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
