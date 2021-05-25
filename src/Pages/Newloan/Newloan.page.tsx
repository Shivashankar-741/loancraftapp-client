import React, { ReactElement } from 'react';
import {
  AppBar,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Button,
} from '@material-ui/core';
import { useStyles } from './Newloan.styles';

const Newloan = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AppBar className={classes.appbar} elevation={0} position="static" color="inherit">
        <h1 className={classes.heading}>New loan</h1>
      </AppBar>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Name
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              parent Name
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainer} spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Mobile No
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Alternative Mobile No
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainer} spacing={4}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Address
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainer} spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            className={classes.outline}
            fullWidth
            id="date"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Amount
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainer} spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Interest
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Interest Paid
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainer} spacing={4}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Notes
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <Button className={classes.button} variant="contained">
          Submit
        </Button>
        <Button className={classes.button} variant="contained">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Newloan;
