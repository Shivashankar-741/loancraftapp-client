import { AppBar, Grid, Paper, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useStyles } from './Dashboard.style';
import {
  ProgressLoansSVG,
  ClosedLoansSVG,
  LoansGivenSVG,
  PendingInterestSVG,
  TotalLoanAmountSVG,
} from '../../icons';

const Dashboard = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar className={classes.appbar} elevation={0} position="static" color="inherit">
        <h1 className={classes.heading}>Overview Of LoanCraft</h1>
      </AppBar>
      <Grid container spacing={2} className={classes.containerOne}>
        <Grid item xs={12} sm={4} md={4}>
          <Paper className={classes.paper}>
            <ProgressLoansSVG />
            <Typography className={classes.loanHeading}>Total Progress Loans</Typography>
            <Typography className={classes.loanCount}>16</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Paper className={classes.paper}>
            <ClosedLoansSVG />
            <Typography className={classes.loanHeading}>Closed Loans</Typography>
            <Typography className={classes.loanCount}>03</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Paper className={classes.paper}>
            <LoansGivenSVG />
            <Typography className={classes.loanHeading}>Loans Given</Typography>
            <Typography className={classes.loanCount}>19</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.containerOne}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <PendingInterestSVG />
            <Typography className={classes.loanHeading}>Pending interest</Typography>
            <Typography className={classes.loanCount}>&#8377; 2,71,500</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <TotalLoanAmountSVG />
            <Typography className={classes.loanHeading}>Total Loan Amount</Typography>
            <Typography className={classes.loanCount}> &#8377; 1,65,000</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
