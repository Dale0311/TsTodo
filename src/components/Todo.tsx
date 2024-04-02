import { useState } from 'react';

interface Todo {
  author: string;
  title: string;
  isComplete: boolean;
  id: string;
}

const Todo = (props: Todo) => {
  const { author, id, isComplete, title } = props;
  const [isDone, setIsDone] = useState(isComplete);

  const toggleIsDone: () => void = () => {
    setIsDone((prev) => !prev);
  };
  return (
    <div className="space-y-2 p-2 rounded border">
      <p className="text-lg font-bold">{title}</p>
      <p>By: {author}</p>
      <div className="flex items-center space-x-2">
        <label htmlFor={id}>completed:</label>{' '}
        <input
          type="checkbox"
          onClick={toggleIsDone}
          checked={isDone}
          name={id}
          id={id}
        />
      </div>
    </div>
  );
};

export default Todo;