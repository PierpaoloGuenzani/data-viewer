import './App.css';
import DailyTable from './components/daily-table';
import SchedulerTable from './components/scheduler-table';
import HistoricalTable from './components/historical-table';
import ExchangeRateTable from './components/exchange-rate-table';
import DataView from './components/scheduler-view';
import { Button } from '@mui/material';
import { useState } from 'react';
import ScheduleView from './components/scheduler-view';

function App()
{
  const [view , setView] = useState(<ScheduleView/>);

  function onClickSchedule()
  {
    console.log("schedule click");
    setView(<ScheduleView/>);
  }
  function onClickData()
  {
    console.log("Date click");
    setView(<ExchangeRateTable/>);
  }

  return (
    <div className="App">
      <div className="button">
        <Button variant='contained' size='large' onClick={onClickSchedule}>Schedule</Button>
        <Button variant='contained' size='large'onClick={onClickData}>Data View</Button>
        </div>
      {view}
    </div>
  );
}

export default App;
