import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      fontFamily: 'Gilroy',
    },

    linkTag: {
      textDecoration: 'none',
      color: '#D8DAE5',

      '&:hover': {
        color: '#52BD94',
      },

      '& .MuiButtonBase-root': {
        margin: '15px 0',
        '&:hover': {
          borderLeft: '3px solid #52BD94',
          transition: ' borderLeft 3s',
        },
      },
      // '& .MuiListItem-gutters': {
      //   PaddingLeft: '0px',
      // },
    },

    linkIcon: {
      color: '#D8DAE5',

      '&:hover': {
        color: '#52BD94',
      },
    },
    linkRoute: {
      '& .MuiTypography-root': {
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: '16px',
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      filter: 'drop-shadow(0px 4px 12px rgba(16, 24, 64, 0.04))',
      borderRadius: '8px',
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      // backgroundColor: '#101840',
    },
    menuButton: {
      marginRIght: 36,
      // position: 'absolute',
      // left: '60px',
      // top: '20px',
    },

    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      backgroundColor: '#101840',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: '#101840',
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(2, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },

    avatar: {
      position: 'absolute',
      right: '0',
      marginRight: '10px',
    },

    heading: {
      fontSize: '30px',
      fontFamily: 'Gilroy',
      color: '#101840',
      marginLeft: '30px',
      fontWeight: 'bold',
    },
  })
);
