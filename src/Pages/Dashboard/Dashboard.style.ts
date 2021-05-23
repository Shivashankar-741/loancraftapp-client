import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: { backgroundColor: '#FFFFFF' },
    appbar: {
      borderRadius: 5,
      padding: '20px 30px',
      backgroundColor: '#FFFFFF',
    },
    heading: {
      fontSize: '20px',
      fontFamily: 'Gilroy',
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: 'center',

      backgroundColor: '#FFFFFF',
      border: '1px solid rgba(16, 24, 64, 0.04)',
      boxSizing: 'border-box',
      borderRadius: '8px',
    },

    containerOne: {
      padding: '20px 30px',
    },
    loanHeading: {
      fontFamily: 'Gilroy',
      fontSize: '16px',
      color: '#959EAC',
    },
    loanCount: {
      fontFamily: 'Gilroy',
      fontSize: '40px',
      color: '#4D5165',
    },
  })
);
