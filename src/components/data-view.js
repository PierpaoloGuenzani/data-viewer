import { Fragment, useRef, useState } from "react";
import ExchangeRateTable from "./exchange-rate-table";
import HistoricalTable from "./historical-table";
import DailyTable from "./daily-table";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { Button, TextField } from '@mui/material';

export default function DataView()
{
    const dateRef = useRef();
    const symbolRef = useRef();
    const [state, setState] = useState(<ExchangeRateTable/>);
    const [date, setDate] = useState();
    const [symbol, setSymbol] = useState();

    function allHandler()
    {
        setState(<ExchangeRateTable/>);
    }

    const handleSearch = (event) =>
    {
        //TODO: separare i componenti symbol ha piu textfield!!!
        setDate(dateRef.current.value);
        setSymbol(symbolRef.current.value);
    }

    function historicalHandler()
    {
        setState(
            <div>
                <TextField size='small' label="Symbol" inputRef={symbolRef}></TextField>
                <Button variant='outlined' onClick={event => handleSearch(event)}>Search</Button>
                <HistoricalTable key={symbol} symbol={symbol}/>
            </div>);
    }

    function dateHandler()
    {
        setState(
            <div>
                <TextField size='small' label="Date" inputRef={dateRef}></TextField>
                <Button variant='outlined' onClick={event => handleSearch(event)}>Search</Button>
                <DailyTable key={date} date={date}/>
            </div>);
    }

    return(
        <div>
            <div>
                <RadioGroup row defaultValue="All">
                    <FormControlLabel value="All" control={<Radio />} label="All" onClick={allHandler} />
                    <FormControlLabel value="Historical" control={<Radio />} label="Historical" onClick={historicalHandler}/>
                    <FormControlLabel value="Date" control={<Radio />} label="Date" onClick={dateHandler}/>
                </RadioGroup>
            </div>
            <div>
                {state}
            </div>
        </div>
    );
}