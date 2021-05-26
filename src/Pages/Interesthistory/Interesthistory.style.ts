import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: '#FFFFFF',
      padding: '20px',
    },
    appbar: {
      backgroundColor: '#FFFFFF',
      filter: 'drop-shadow(0px 4px 12px rgba(16, 24, 64, 0.04))',
      borderRadius: '8px',
    },
    heading: {
      fontSize: '20px',
      fontFamily: 'Gilroy',
    },

    outline: {
      backgroundColor: '#FFFFFF',
      border: '1px solid rgba(16, 24, 64, 0.04)',
      boxSizing: 'border-box',
      borderRadius: '10px',
      fontSize: '12px',
      fontFamily: 'Gilroy',
    },

    button: {
      fontSize: '18px',
      fontFamily: 'Gilroy',
      padding: '9px 16px',
      cursor: 'pointer',
      border: '1px solid rgba(16, 24, 64, 0.04)',
      boxSizing: 'border-box',
      borderRadius: '10px',
      color: '#4D5165',
    },
  })
);
