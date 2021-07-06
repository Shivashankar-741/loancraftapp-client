import { Grid, Button, Container, Paper, Typography } from '@material-ui/core';
import { usersAPI } from 'apis';
import React, { ReactElement, useState } from 'react';
import { useMutation } from 'react-query';
import { FacebookIconSVG, GoogleIconSVG } from '../../icons';
import { useStyles } from './Auth.style';
import AuthInput from './AuthInput';
import { useHistory } from 'react-router-dom';

const Auth = (): ReactElement => {
  const history = useHistory();
  const classes = useStyles();

  const signinMutation = useMutation(usersAPI.signin);
  const signupMutation = useMutation(usersAPI.signup);

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignup) {
      // alert('please check your password');
      console.log(formData);
      await signupMutation.mutateAsync({ ...formData, history });
    } else {
      console.log(formData);
      await signinMutation.mutateAsync({ ...formData, history });
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Welcome to Loancraft</Typography>
        <div className={classes.loginIcon}>
          <div className={classes.googleIcon}>
            <GoogleIconSVG />
          </div>
          <div className={classes.facebookIcon}>
            <FacebookIconSVG />
          </div>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <AuthInput
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <AuthInput name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <AuthInput
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <AuthInput
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <AuthInput
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>

          {isSignup ? (
            <span className={classes.login}>
              Already have an account?
              <span onClick={switchMode} className={classes.sign}>
                Signin
              </span>
            </span>
          ) : (
            <span className={classes.login}>
              Don't have an account?
              <span onClick={switchMode} className={classes.sign}>
                Signup
              </span>
            </span>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
