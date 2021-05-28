import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: '24px',
      fontFamily: 'Gilroy',
      fontWeight: 'bold',
      marginTop: '30px',
      marginBottom: '10px',
      color: '#2E2E2E',
    },

    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      borderRadius: '12px',
      backgroundColor: '#FFFFFF',
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#1BCE8E',
      borderRadius: '8px',
      padding: '10px 15px',
      color: '#FFFFFF',
    },
    googleButton: {
      marginBottom: theme.spacing(2),
    },

    loginIcon: {
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    googleIcon: {
      marginRight: '20px',
      padding: '10px 20px',
      border: '2px solid rgba(18, 24, 64, 0.04)',
      borderRadius: '12px',
    },
    facebookIcon: {
      padding: '10px 20px',
      border: '2px solid rgba(18, 24, 64, 0.04)',
      borderRadius: '12px',
    },
    login: {
      fontSize: '14px',
      fontFamily: 'Gilroy',
      display: 'flex',
      justifyContent: 'center',
    },
    sign: {
      color: '#1BCE8E',
      marginLeft: '5px',
      cursor: 'pointer',
    },
  })
);
