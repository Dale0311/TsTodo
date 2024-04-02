import { ChangeEvent, useState } from 'react';

const WriteTodo = () => {
  const [todo, setTodo] = useState('');
  const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    if (e.target) {
      setTodo(e.target.value);
    }
  };
  return (
    <div className="space-x-2 flex border p-4 items-center">
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
  );
};

export default WriteTodo;
