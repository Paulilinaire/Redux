import './App.css';
import { useEffect } from 'react';
import useDispatch from 'react-redux'
import { fetchTodos } from './components/todoItemsSlice';
import TodoForm from './components/TodoForm';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div>
      <TodoForm />
    </div>
  );
}

export default App;
