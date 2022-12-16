import * as React from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../shared/Title';


export default function Orders({ data }) {

  const allPrices = data.map(elm => {
    parseFloat(elm.price.replace(" USD", " ")).toFixed(2)
    const prices = +elm.price.replace(" USD", " ")
    return +prices.toFixed(2)
  })

  return (
    <Grid xs={4}>
      {data.length === 1 && (
        <Title>Your Order</Title>
      )}
      {data.length > 1 && (
        <Title>Your Orders</Title>
      )}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Restaurants</TableCell>
            <TableCell>Order</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map(elm => (
            <TableRow key="data.i">
              <TableCell>{elm.index}</TableCell>
              <TableCell> {elm.name}
              </TableCell>
              <TableCell>{elm.category}</TableCell>
              <TableCell align="right">{elm.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='total-sum-amout'>
        <Title>Your Total Is ${allPrices.reduce(
          (a, b) => a + b,
          0
        )}</Title>
      </div>
    </Grid>
  );
}