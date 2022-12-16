import * as React from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../shared/Title';


export default function Orders({data}) {

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
            <TableRow key="data.id">
              <TableCell>data.id</TableCell>
              <TableCell> data.name
            </TableCell>
              <TableCell>data.category</TableCell>
              <TableCell align="right">data.price</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <div className='total-sum-amout'>
          {/* <p>{data.reduce((acc,sum) => acc + sum)}</p> */}
           <Title>Checkout: 70.99</Title>
      </div>
    </Grid>
  );
}