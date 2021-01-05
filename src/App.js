import React from "react";

import "./App.css";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";
import { Today } from "./components/Today";

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learn aboout React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Today />
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li>
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          </li>
        ))}
        <TodoForm addTodo={addTodo} />
      </ul>
    </div>
  );
}

export default App;
