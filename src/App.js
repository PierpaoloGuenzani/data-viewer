import './App.css';
import { useSelector } from 'react-redux';
import MainPage from './components/main-page';
import LoginView from './components/login-view';

function App()
{
  const value = useSelector(state => state.authentication.value);
  //inizio
  return (
    <div>
      <div className="main-page">
        {value? <MainPage/> : <LoginView/>}
      </div>
    </div>
  );
}

export default App;
