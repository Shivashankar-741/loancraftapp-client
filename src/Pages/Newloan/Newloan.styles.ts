import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: '#FFFFFF',
    },
    appbar: {
      padding: '20px 30px',
      backgroundColor: '#FFFFFF',
      filter: 'drop-shadow(0px 4px 12px rgba(16, 24, 64, 0.04))',
      borderRadius: '8px',
    },
    heading: {
      fontSize: '20px',
      fontFamily: 'Gilroy',
    },

    gridContainer: {
      marginTop: '5px',
    },
    outline: {
      backgroundColor: '#FFFFFF',
      // border: '1px solid rgba(16, 24, 64, 0.04)',
      // boxSizing: 'border-box',
      // borderRadius: '8px',
      fontSize: '16px',
      fontFamily: 'Gilroy',
    },

    buttons: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '30px 0',
    },
    button: {
      fontSize: '18px',
      fontFamily: 'Gilroy',
      padding: '8px 20px',
      marginRight: '10px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: 'none',
      color: '#4D5165',
    },
  })
);
