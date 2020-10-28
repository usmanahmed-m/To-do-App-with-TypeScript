import React from "react";
import { TodoListItem } from "./TodoListItem";

type Props = {
  todos: Todo[];
  toggleTodo: toggleTodo;
};

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
