import React, { useContext } from "react";
import styles from "./Todos.module.css";
import { todoContext } from "../context/context";
function Todos({ obj }) {
  const { state, dispatch } = useContext(todoContext);
  console.log(state);
  return (
    <div className={styles.todos}>
      <p>{obj.value}</p>
      <button
        onClick={() => dispatch({ type: "DELETE_TODO", payload: obj.id })}
      >
        Delete
      </button>
    </div>
  );
}

export default Todos;
