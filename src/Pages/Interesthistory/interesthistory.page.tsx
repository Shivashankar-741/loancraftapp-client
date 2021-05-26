import { Box, Button, FormControl, InputLabel, OutlinedInput, Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './Interesthistory.style';
import './Interesthistory.style.css';

const rows = [
  {
    sNo: 1,
    dateOfPaid: '11-05-2020',
    time: '05:02:09',
    amount: 50000,
  },
  {
    sNo: 1,
    dateOfPaid: '11-05-2020',
    time: '05:02:09',
    amount: 50000,
  },
];

const Interesthistory = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ width: '100%' }} className={classes.appbar}>
        <Box display="flex" alignItems="center" p={1}>
          <Box p={1} flexGrow={1}>
            <Typography className={classes.heading}>Interest history</Typography>
          </Box>
          <Box p={1}>
            <FormControl variant="outlined">
              <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
                Enter Loan ID
              </InputLabel>
              <OutlinedInput
                className={classes.outline}
                id="outlined-adornment-amount"
                labelWidth={60}
              />
            </FormControl>
          </Box>
          <Box p={1}>
            <Button className={classes.button} variant="contained">
              Search
            </Button>
          </Box>
        </Box>
      </div>
      <Paper className="container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Date of Paid</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((el) => (
              <TableRow key={el.sNo}>
                <TableCell component="th" scope="row">
                  {el.sNo}
                </TableCell>
                <TableCell component="th" scope="row">
                  {el.dateOfPaid}
                </TableCell>
                <TableCell>{el.time}</TableCell>
                <TableCell>{el.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Interesthistory;
