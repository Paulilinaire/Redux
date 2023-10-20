import { useSelector } from 'react-redux';
import './App.css';
import SignForm from './components/SignForm';
import TaskForm from './components/task/TaskForm';

function App() {
  const user = useSelector(state => state.auth.user) // on va chercher le user dans authSlice

  return (
    <>
    {
      user ? 
        <TaskForm user={user} />
        :
        <SignForm /> 
    }
    </>
  );
}

export default App;
