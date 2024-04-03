import { useState } from 'react';
import TodoList from './components/TodoList';
import WriteTodo from './components/WriteTodo';
import data from './data';
import { TodoType } from './types/types';

// the data imported to todolist should be here so that we can put it on state and reference the setter value to WriteTodo tsx
function App() {
  const [todos, setTodos] = useState(data);
  const todosLength = todos.length;
  const handleAddTodo = (todo: TodoType) => {
    setTodos((prev) => [todo, ...prev]);
  };
  return (
    <div className="flex h-screen justify-center items-center bg-slate-50">
      <div className="bg-white p-4 space-y-2">
        <h1 className="text-lg font-serif">Todo App:</h1>
        <WriteTodo addTodoFn={handleAddTodo} todosLength={todosLength} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

// Simple Todo list implemented typescript
// shows todos
// perform write(create , update, delete)
// manipulate todo property isComplete

// hierarchy of component
{
  /* 
<App>
  <WriteTodo />
  <TodoList>
    <Todo /> perform write functionalities
  </TodoList>
</App>; 
*/
}

// shape of data
// {
//   author: 'Dale',
//   id: 1,
//   title: 'delectus aut autem',
//   isComplete: false,
// }
export default App;
