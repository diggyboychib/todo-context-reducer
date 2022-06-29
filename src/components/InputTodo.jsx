import React, { useContext, useState } from "react";
import styles from "./InputTodo.modules.css";
import { todoContext } from "../context/context";

function InputTodo() {
  const [userInput, setUserInput] = useState("");
  const { state, dispatch } = useContext(todoContext);
  return (
    <div className={styles["todo-input-container"]}>
      <form>
        <input
          for="button"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          id="button"
          type="button"
          onClick={() => {
            console.log("userInput", userInput);
            dispatch({
              type: "ADD_TODO",
              payload: { value: userInput, id: Math.random() },
            });
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
