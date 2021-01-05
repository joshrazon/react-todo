import React from "react";

export function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo-item">
      <h3 className={todo.isCompleted ? "completed" : ""}>{todo.text}</h3>
      <div className="btn-container">
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}
