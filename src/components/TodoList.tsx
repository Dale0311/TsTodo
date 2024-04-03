import { TodoType } from '../types/types';
import Todo from './Todo';
type TodoList = {
  todos: TodoType[];
};

const TodoList = ({ todos }: TodoList) => {
  const todoList = todos.map((todo) => (
    <Todo
      author={todo.author}
      title={todo.title}
      isComplete={todo.isComplete}
      id={todo.id}
      key={todo.id}
    />
  ));
  return <div className="space-y-2">{todoList}</div>;
};

export default TodoList;
