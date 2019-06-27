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
  createData('Sally Smith', 159, 6.0, 24, 4.0),
  createData('Tom Jones', 237, 9.0, 37, 4.3),
  createData('Jonny Carson', 262, 16.0, 24, 6.0),
  createData('Morine Williamson', 305, 3.7, 67, 4.3)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Property Value</TableCell>
            <TableCell>Current Loan</TableCell>
            <TableCell>Benefit</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.custName}>
              <TableCell component="th" scope="row">
                {row.custName}
              </TableCell>
              <TableCell>{row.estValProperty}</TableCell>
              <TableCell>{row.currentlyOweLoan}</TableCell>
              <TableCell>{row.benefit}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
