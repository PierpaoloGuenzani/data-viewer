import PropTypes from 'prop-types';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

DailyTable.propTypes = {
    date : PropTypes.string.isRequired
}

export default function DailyTable(props)
{
    const [data, setData] = useState([]);
    const [exchangeRates, setExchangeRates] = useState([{}]);
    //useEffect

    const fetchData = () => {
        fetch(`https://dummyjson.com/products`)
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            setData(actualData.products);
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

    function myFetchFunction()
    {
        fetch('http://localhost:8081/storage/exchange-rates/'+props.date).then(
            (response) => 
            {
                console.log(response.ok);
                if(response.ok)
                {
                    setExchangeRates(response.json());
                    console.log(exchangeRates);
                    //mappare da response 
                }
            }
        );
    }

    //myFetchFunction();

    return (
        <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Date: {props.date}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Symbol</TableCell>
                    <TableCell>Weighted Average</TableCell>
                    <TableCell>Traiding Volume</TableCell>
                    <TableCell>Highest Price</TableCell>
                    <TableCell>Lowest Price</TableCell>
                    <TableCell>Opening Price</TableCell>
                    <TableCell>Closing Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {exchangeRates.map((row) => (
                <TableRow key={[row.date, row.symbol]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.symbol}</TableCell>
                    <TableCell>{row.weightedAverage}</TableCell>
                    <TableCell>{row.tradingVolume}</TableCell>
                    <TableCell>{row.highestPrice}</TableCell>
                    <TableCell>{row.lowestPrice}</TableCell>
                    <TableCell>{row.openingPrice}</TableCell>
                    <TableCell>{row.closePrice}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
}