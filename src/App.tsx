import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import WriteTodo from './components/WriteTodo';
import { TodoType } from './types/types';
import { api, deleteTodo } from './api';

// the data imported to todolist should be here so that we can put it on state and reference the setter value to WriteTodo tsx
function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const data = await (await api.get('/todos')).data;
      setTodos(data);
    };
    fetchUser();
  }, []);

  return (
    <div className="flex h-screen justify-center items-center bg-slate-50">
      <div className="bg-white p-4 space-y-2">
        <h1 className="text-lg font-serif">Todo App:</h1>
        <WriteTodo setterTodos={setTodos} />
        <TodoList todos={todos} setterTodo={setTodos} />
        <button onClick={() => deleteTodo('5', setTodos)}>
          Test Api delete Todo
        </button>
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
