import TodoList from './components/TodoList';
import WriteTodo from './components/WriteTodo';

// the data imported to todolist should be here so that we can put it on state and reference the setter value to WriteTodo tsx
function App() {
  return (
    <div className="flex h-screen justify-center items-center bg-slate-50">
      <div className="bg-white p-4 space-y-2">
        <h1 className="text-lg font-serif">Todo App:</h1>
        <WriteTodo />
        <TodoList />
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
