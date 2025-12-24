import ToDo from "./ToDo";

function ToDoContainer({ todos, deleteTodo }) {
  return (
    <div className="list-container">
      {todos.map((todo, index) => {
        return <ToDo todo={todo} index={index} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default ToDoContainer;
