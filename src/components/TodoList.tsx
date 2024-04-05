import { TodoType } from '../types/types';
import Todo from './Todo';
type TodoList = {
  todos: TodoType[];
  setterTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const TodoList = ({ todos, setterTodo }: TodoList) => {
  const todoList = todos.map((todo) => (
    <Todo todo={todo} key={todo.id} setterTodo={setterTodo} />
  ));
  return todoList.length === 0 ? (
    <p>No Todos..</p>
  ) : (
    <div className="space-y-2">{todoList}</div>
  );
};

export default TodoList;
