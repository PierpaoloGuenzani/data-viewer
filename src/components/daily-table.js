import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { properties } from '../properties';


export default function DailyTable(date)
{
    const [exchangeRates, setExchangeRates] = useState([]);

    const fetchData = () => {
        fetch(properties.DATA_STORER_EXCHANGE_RATE+date)
          .then((response) => response.json())
          .then((data) => 
          {
            console.log(data);
            setExchangeRates([...exchangeRates, ...data]);
          })
          .catch(err => console.log(err));
      };

    return (
        <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}  size='small'>
            <TableHead>
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