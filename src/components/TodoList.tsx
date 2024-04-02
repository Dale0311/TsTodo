import Todo from './Todo';
import data from './data';

const TodoList = () => {
  const todoList = data.map((todo) => (
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
