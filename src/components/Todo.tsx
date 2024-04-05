import { useState } from 'react';
import { TodoType } from '../types/types';
import { deleteTodo } from '../api';

type Todo = {
  todo: TodoType;
  setterTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const Todo = ({ todo, setterTodo }: Todo) => {
  const { author, id, isComplete, title } = todo;

  const [isDone, setIsDone] = useState(isComplete);

  const toggleIsDone: () => void = () => {
    setIsDone((prev) => !prev);
  };
  return (
    <div className="flex p-2 rounded border items-start space-x-2">
      <div className="space-y-2 flex-1 max-w-md">
        <p className="text-lg font-bold">{title}</p>
        <p>By: {author}</p>
        <div className="flex items-center space-x-2">
          <label htmlFor={id}>completed:</label>{' '}
          <input
            type="checkbox"
            onChange={toggleIsDone}
            checked={isDone}
            name={id}
            id={id}
          />
        </div>
      </div>
      <div className="w-22">
        <button
          className="py-2 px-4 rounded bg-red-500 hover:bg-red-600 text-white"
          onClick={() => deleteTodo(id, setterTodo)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
