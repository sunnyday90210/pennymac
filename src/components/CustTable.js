import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
}));

function createData(
  custName,
  estValProperty,
  currentlyOweLoan,
  benefit,
  status
) {
  return { custName, estValProperty, currentlyOweLoan, benefit, status };
}

const rows = [
  createData(
    'Sally Smith',
    '400,000',
    '300,000',
    'Lower My Monthly Payment',
    'Emailed'
  ),
  createData(
    'Tom Jones',
    '500,000',
    '200,000',
    'Lock in A Fixed Rate',
    'Need More Info'
  ),
  createData(
    'Jonny Carson',
    '600,000',
    '100,000',
    'Cash Out Equity',
    'Follow Up'
  ),
  createData(
    'Morine Williamson',
    '700,000',
    '800,000',
    'Pay Off My Mortgage Faster',
    'Emailed'
  )
];

// const status = {
//   emailed: 'green',
//   need: 'red',
//   followUp: 'blue'
// };

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'black'
              }}>
              Customer Name
            </TableCell>
            <TableCell
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'black'
              }}>
              Property Value
            </TableCell>
            <TableCell
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'black'
              }}>
              Current Loan
            </TableCell>
            <TableCell
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'black'
              }}>
              Benefit
            </TableCell>
            <TableCell
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'black'
              }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.custName}>
              <TableCell component="th" scope="row">
                {row.custName}
              </TableCell>
              <TableCell>${row.estValProperty}</TableCell>
              <TableCell>${row.currentlyOweLoan}</TableCell>
              <TableCell>{row.benefit}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
