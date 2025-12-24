function ToDo({ todo , index, deleteTodo}) {
  return (
    <div>
      <div className="todo">
        <p>{todo}</p>

        <div className="actions">
          <input type="checkbox" />
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
