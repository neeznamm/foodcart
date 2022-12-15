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
      <Title>Вашата Нарачка</Title>
      )}
      {data.length > 1 && (
      <Title>Вашите Нарачки</Title>
      )}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Број</TableCell>
            <TableCell>Адреса</TableCell>
            <TableCell>Нарачка</TableCell>
            <TableCell align="right">Цена</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key="110">
              <TableCell>110</TableCell>
              <TableCell>Партизанска</TableCell>
              <TableCell>Хамбургер</TableCell>
              <TableCell align="right">15.99</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <div className='total-sum-amout'>
          {/* <p>{data.reduce((acc,sum) => acc + sum)}</p> */}
           <Title>Вкупна Цена: 70.99</Title>
      </div>
    </Grid>
  );
}