import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  const [input, setInput] = useState(" ");
  const [todos, settodos] = useState([]);

  function writeToDo(e) {
    setInput(e.target.value);
  }

  function addToDo() {
    if (input != "") {
      settodos((prevToDo) => [...prevToDo, input]);
      setInput("");
    }
  }

  console.log(todos);

  function deleteTodo(todoIndex) {
    settodos((prevToDo) =>
      prevToDo.filter((prevToDo, prevToDoIndex) => {
        return prevToDoIndex != todoIndex;
      })
    );
  }

  return (
    <main>
      <h1>ToDo List</h1>
      <InputContainer input={input} writeToDo={writeToDo} addToDo={addToDo} />
      <ToDoContainer todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
