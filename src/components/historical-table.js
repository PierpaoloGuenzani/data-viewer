import PropTypes from 'prop-types';
import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

HistoricalTable.prototype = {
    symbol: PropTypes.string.isRequired,
    startingDate: PropTypes.string,
    endingDate: PropTypes.string
}

export default function HistoricalTable(props)
{
    const [exchangeRates, setExchangeRates] = useState([{}]);

    function myFetchFunction()
    {
        fetch('http://localhost:8081/storage/historical/').then(
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
        <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Symbol: {exchangeRates[0].symbol}</TableCell>
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
                <TableRow key={[row.date]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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