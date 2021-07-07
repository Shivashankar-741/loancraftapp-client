import React, { ReactElement } from 'react';
import { AppBar, Grid, TextField, Button } from '@material-ui/core';
import { useStyles } from './Newloan.styles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { QueryClient, useMutation } from 'react-query';
import { loansAPI } from 'apis';
import { useHistory } from 'react-router-dom';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  firstName: yup
    .string()
    .max(18, 'first name should be less than 18 characters length')
    .required('First name is required'),
  lastName: yup
    .string()
    .max(15, 'second name should be less than 15 characters length')
    .required('Last name is required'),
  mobileNumber: yup
    .string()
    .required('Mobile number required')
    .matches(phoneRegExp, 'Mobile number is not valid')
    .min(10, 'to short')
    .max(10, 'to long'),
  alternativeMobileNumber: yup
    .string()
    .required('Alternative mobile number required')
    .matches(phoneRegExp, 'Alternative mobile number is not valid')
    .min(10, 'to short')
    .max(10, 'to long'),
  address: yup
    .string()
    .required('Address is  required')
    .max(80, 'Address name should be less than 80 characters length'),
  notes: yup
    .string()
    .required('Notes is  required')
    .max(120, 'Address name should be less than 120 characters length'),
  date: yup.string().required('Date is required'),
  amount: yup.string().required('Amount is required').min(4, 'Amount should be more than 1000'),
});

const Newloan = (): ReactElement => {
  const user = JSON.parse(localStorage.getItem('profile')!);
  console.log(user);

  const classes = useStyles();
  const queryClient = new QueryClient();
  let MyDate = new Date();

  let MyDateString = `${MyDate.getFullYear()}-${('0' + (MyDate.getMonth() + 1)).slice(-2)}-${(
    '0' + MyDate.getDate()
  ).slice(-2)}`;

  const mutation = useMutation(loansAPI.addLoan, {
    onSuccess: () => queryClient.refetchQueries(),
  });

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      alternativeMobileNumber: '',
      address: '',
      date: new Date(),
      amount: 0,
      notes: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (user) {
        mutation.mutate({ ...values, date: new Date().toISOString(), creator: user?.result?._id });
        history.push('/inprogress');
      } else {
        alert('please sign up to continue');
        history.push('/auth');
      }
    },
  });

  return (
    <div className={classes.container}>
      <AppBar className={classes.appbar} elevation={0} position="static" color="inherit">
        <h1 className={classes.heading}>New loan</h1>
      </AppBar>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              name="firstName"
              onChange={formik.handleChange}
              variant="outlined"
              required
              fullWidth
              label="First Name"
              type="text"
              className={classes.outline}
              value={formik.values.firstName}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              name="lastName"
              onChange={formik.handleChange}
              variant="outlined"
              required
              fullWidth
              label="Last Name"
              type="text"
              className={classes.outline}
              value={formik.values.lastName}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.gridContainer} spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              name="mobileNumber"
              onChange={formik.handleChange}
              variant="outlined"
              required
              fullWidth
              label="Mobile Number"
              type="text"
              className={classes.outline}
              value={formik.values.mobileNumber}
              error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
              helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              name="alternativeMobileNumber"
              onChange={formik.handleChange}
              variant="outlined"
              required
              fullWidth
              label="Alternative Mobile Number"
              type="text"
              className={classes.outline}
              value={formik.values.alternativeMobileNumber}
              error={
                formik.touched.alternativeMobileNumber &&
                Boolean(formik.errors.alternativeMobileNumber)
              }
              helperText={
                formik.touched.alternativeMobileNumber && formik.errors.alternativeMobileNumber
              }
            />
          </Grid>
        </Grid>
        <Grid container className={classes.gridContainer} spacing={4}>
          <Grid item xs={12}>
            <TextField
              name="address"
              onChange={formik.handleChange}
              variant="outlined"
              required
              fullWidth
              label="Address"
              type="text"
              className={classes.outline}
              value={formik.values.address}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.gridContainer} spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              className={classes.outline}
              onChange={formik.handleChange}
              name="date"
              fullWidth
              id="date"
              label="Select today Date"
              type="date"
              defaultValue={MyDateString}
              // defaultValue="2017-05-04"
              InputLabelProps={{
                shrink: true,
              }}
              // value={MyDateString}
              value={formik.values.date}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              name="amount"
              onChange={formik.handleChange}
              variant="outlined"
              required
              fullWidth
              label="Amount"
              type="number"
              className={classes.outline}
              value={formik.values.amount}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText={formik.touched.amount && formik.errors.amount}
            />
          </Grid>
        </Grid>

        <Grid container className={classes.gridContainer} spacing={4}>
          <Grid item xs={12}>
            <TextField
              name="notes"
              onChange={formik.handleChange}
              variant="outlined"
              required
              fullWidth
              label="Notes"
              type="text"
              className={classes.outline}
              value={formik.values.notes}
              error={formik.touched.notes && Boolean(formik.errors.notes)}
              helperText={formik.touched.notes && formik.errors.notes}
            />
          </Grid>
        </Grid>
        <div className={classes.buttons}>
          <Button className={classes.button} variant="contained" type="submit">
            Submit
          </Button>
          <Button
            onClick={() => formik.initialValues}
            className={classes.button}
            variant="contained"
          >
            Reset
          </Button>
        </div>
      </form>
      {/* <div className={classes.buttons}>
        <Button onClick={submitLoanData} className={classes.button} variant="contained">
          Submit
        </Button>
        <Button onClick={clearLoanData} className={classes.button} variant="contained">
          Reset
        </Button>
      </div> */}
    </div>
  );
};

export default Newloan;
