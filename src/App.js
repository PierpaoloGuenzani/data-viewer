import './App.css';
import { useSelector } from 'react-redux';
import MainPage from './components/main-page';
import LoginView from './components/login-view';

function App()
{
  const value = useSelector(state => state.authentication.value);

  return (
    <div>
      <div className="login">
        {value? <MainPage/> : <LoginView/>}
      </div>
    </div>
  );
}

export default App;
