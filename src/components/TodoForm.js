import React from "react";

export function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value)
      return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
