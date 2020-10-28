import React from "react";

type Props = {
  todo: Todo;
  toggleTodo: toggleTodo;
};

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          defaultChecked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text}
      </label>
    </li>
  );
};
