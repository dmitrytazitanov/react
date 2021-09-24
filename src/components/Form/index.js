import React, { useState, useRef, useCallback } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "../Button";
import './styles.css';

export const Form = ({ onSubmit }) => {
  const inputRef = useRef(null);

  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");

    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="textfield"
        id="outlined-multiline-flexible"
        variant="outlined"
        maxRows={4}
        label="Message"
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
      />
        <Button type="submit">
          <>
            <span>Add message</span>
          </>
        </Button>
    </form>
  );
};
