import './App.css';
import DataView from './components/data-view';
import { Button } from '@mui/material';
import { useState } from 'react';
import ScheduleView from './components/scheduler-view';
import { LoginComponent } from './components/login';
import { useSelector } from 'react-redux';

function App()
{
  const [view , setView] = useState(<ScheduleView/>);

  const value = useSelector(state => state.authentication.value);

  function onClickSchedule()
  {
    console.log("schedule click");
    setView(<ScheduleView/>);
  }
  function onClickData()
  {
    console.log("Date click");
    setView(<DataView/>);
  }

  return (
    <div className="App">
      <div className="button">
        <Button variant='contained' size='large' onClick={onClickSchedule}>Schedule</Button>
        <Button variant='contained' size='large'onClick={onClickData}>Data View</Button>
      </div>
      {value? view : null}
      <div className="login">
        {value? null : <LoginComponent/>}
      </div>
    </div>
  );
}

export default App;
