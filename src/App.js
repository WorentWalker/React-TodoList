import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: true, title: "Купить iPhone 13 Pro" },
    { id: 2, completed: false, title: "Купить машину" },
    { id: 3, completed: false, title: "Купить квартиру" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <div className="wrapper">
      <h1>TodoList</h1>

      <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
    </div>
  );
}

export default App;
