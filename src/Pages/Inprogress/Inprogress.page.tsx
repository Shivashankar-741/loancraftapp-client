import React, { ReactElement } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './InProgress.style.css';
import { AppBar } from '@material-ui/core';
import { useStyles } from './Inprogress.style';

const rows = [
  {
    sNo: 1,
    loanID: 'LID1020',
    name: 'Shiva shankar',
    date: '11-05-2020',
    amount: 50000,
    interest: 1000,
    pendingAmount: 6000,
    fullDetails: 'details',
    customize: 'customize',
  },
  {
    sNo: 2,
    loanID: 'LID1021',
    name: 'Karthikeyan',
    date: '11-05-2020',
    amount: 50000,
    interest: 1000,
    pendingAmount: 6000,
    fullDetails: 'details',
    customize: 'customize',
  },
  {
    sNo: 1,
    loanID: 'LID1020',
    name: 'Shiva shankar',
    date: '11-05-2020',
    amount: 50000,
    interest: 1000,
    pendingAmount: 6000,
    fullDetails: 'details',
    customize: 'customize',
  },
  {
    sNo: 1,
    loanID: 'LID1020',
    name: 'Shiva shankar',
    date: '11-05-2020',
    amount: 50000,
    interest: 1000,
    pendingAmount: 6000,
    fullDetails: 'details',
    customize: 'customize',
  },
  {
    sNo: 1,
    loanID: 'LID1020',
    name: 'Shiva shankar',
    date: '11-05-2020',
    amount: 50000,
    interest: 1000,
    pendingAmount: 6000,
    fullDetails: 'details',
    customize: 'customize',
  },
  {
    sNo: 1,
    loanID: 'LID1020',
    name: 'Shiva shankar',
    date: '11-05-2020',
    amount: 50000,
    interest: 1000,
    pendingAmount: 6000,
    fullDetails: 'details',
    customize: 'customize',
  },
];

const Inprogress = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.bigContainer}>
      <AppBar className={classes.appbar} elevation={0} position="static" color="inherit">
        <h1 className={classes.heading}>Current Loans</h1>
      </AppBar>
      <Paper className="container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Loan ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Pending Amoung</TableCell>
              <TableCell>Full Details</TableCell>
              <TableCell>Customize</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((el) => (
              <TableRow key={el.sNo}>
                <TableCell component="th" scope="row">
                  {el.sNo}
                </TableCell>
                <TableCell component="th" scope="row">
                  {el.loanID}
                </TableCell>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.date}</TableCell>
                <TableCell>{el.amount}</TableCell>
                <TableCell>{el.interest}</TableCell>
                <TableCell>{el.pendingAmount}</TableCell>
                <TableCell>{el.fullDetails}</TableCell>
                <TableCell>{el.customize}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Inprogress;
