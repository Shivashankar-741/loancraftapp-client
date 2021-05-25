import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    bigContainer: {
      backgroundColor: '#FFFFFF',
    },
  })
);
