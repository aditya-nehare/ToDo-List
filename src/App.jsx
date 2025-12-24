import "./App.css";

function App() {
  return (
    <main>
      <h1>ToDo List</h1>
      <div className="container">
        <input type="text" />
        <button>Add Task</button>
      </div>

      <div className="list-container">
        <div className="todo">
          <p>Go to the GYM</p>

          <div className="actions">
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
