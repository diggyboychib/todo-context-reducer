import { useReducer } from "react";
import InputTodo from "./components/InputTodo";
import Todos from "./components/Todos";
import { todoContext } from "./context/context";
import { reducerFn } from "./context/reducer";
function App() {
  const initialState = [];
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div className="App">
      <todoContext.Provider value={{ state, dispatch }}>
        <InputTodo />
        {state.map((obj) => (
          <Todos obj={obj} />
        ))}
      </todoContext.Provider>
    </div>
  );
}

export default App;
