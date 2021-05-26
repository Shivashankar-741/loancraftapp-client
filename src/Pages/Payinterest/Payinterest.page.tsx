import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from '@material-ui/core';
import { ReactElement } from 'react';
import { useStyles } from './Payinterest.style';

const Payinterest = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ width: '100%' }} className={classes.appbar}>
        <Box display="flex" alignItems="center" p={1}>
          <Box p={1} flexGrow={1}>
            <Typography className={classes.heading}>pay Interest</Typography>
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
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl style={{ marginTop: '15px' }} fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Loan ID
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
          <FormControl style={{ marginTop: '15px' }} fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Name
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
          <FormControl style={{ marginTop: '15px' }} fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Parent Name
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
          <FormControl style={{ marginTop: '15px' }} fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Mobile
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
          <FormControl style={{ marginTop: '15px' }} fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Amount
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
          <FormControl style={{ marginTop: '15px' }} fullWidth variant="outlined">
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
        <Grid item xs={12} sm={12} md={5}>
          <Paper className={classes.paper}>
            <Typography className={classes.loanHeading}>Pending Amount &#8377; </Typography>
            <Typography className={classes.loanCount}>0</Typography>
          </Paper>
          <FormControl fullWidth variant="outlined">
            <InputLabel className={classes.outline} htmlFor="outlined-adornment-amount">
              Pay amount
            </InputLabel>
            <OutlinedInput
              className={classes.outline}
              id="outlined-adornment-amount"
              labelWidth={60}
            />
          </FormControl>
          <Button
            style={{ marginTop: '15px' }}
            fullWidth
            className={classes.button}
            variant="contained"
          >
            Pay &#8377;
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Payinterest;
