import { ChangeEvent, useState } from 'react';
import { TodoType } from '../types/types';

type WriteTodoProps = {
  addTodoFn: (todo: TodoType) => void;
  todosLength: number;
};
const WriteTodo = ({ addTodoFn, todosLength }: WriteTodoProps) => {
  const [todo, setTodo] = useState('');

  const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    if (e.target) {
      setTodo(e.target.value);
    }
  };

  return (
    <div className=" border p-4 space-y-2">
      <div className="space-x-2 flex items-center">
        <label htmlFor="todo">New Todo:</label>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          className="p-1 rounded border flex-1"
          name="todo"
          id="todo"
        />
      </div>
      <div className="flex justify-end">
        <button
          disabled={!todo}
          className="py-2 px-4 disabled:bg-blue-100 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600 text-white rounded"
          onClick={() => {
            setTodo('');
            addTodoFn({
              author: 'Dale',
              id: `todo_${todosLength}`,
              isComplete: false,
              title: todo,
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default WriteTodo;
