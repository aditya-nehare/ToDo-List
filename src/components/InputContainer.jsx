function InputContainer({ input, writeToDo, addToDo }) {
  return (
    <div className="container">
      <input type="text" value={input} onChange={writeToDo} />
      <button onClick={addToDo}>Add Task</button>
    </div>
  );
}

export default InputContainer;
