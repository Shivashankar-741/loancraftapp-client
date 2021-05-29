import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './Layout.style';
import { Route, Switch, Link } from 'react-router-dom';
import { routePages } from '../Pages';
import {
  DashboardSVG,
  InprogressSVG,
  NewloanSVG,
  CompletedSVG,
  PayinterestSVG,
  InteresthistorySVG,
  LogoSVG,
  CollapseLeftSVG,
  CollapseRightSVG,
  AvatarSVG,
} from '../icons';
import { CssBaseline } from '@material-ui/core';

const Layout = (): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <CollapseLeftSVG />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className={classes.heading}>LoanCraft</h1>
          </Link>
          <IconButton className={classes.avatar}>
            <Link to="/auth">
              <AvatarSVG />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div>
            <LogoSVG />
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <CollapseRightSVG /> : <CollapseRightSVG />}
          </IconButton>
        </div>
        <List>
          <Link to="/" className={classes.linkTag}>
            <ListItem button>
              <ListItemIcon>
                <DashboardSVG />
              </ListItemIcon>
              <ListItemText className={classes.linkRoute}>Dashboard</ListItemText>
            </ListItem>
          </Link>
          <Link to="/newloan" className={classes.linkTag}>
            <ListItem button>
              <ListItemIcon>
                <NewloanSVG />
              </ListItemIcon>
              <ListItemText className={classes.linkRoute}>New Loan</ListItemText>
            </ListItem>
          </Link>
          <Link to="/inprogress" className={classes.linkTag}>
            <ListItem button>
              <ListItemIcon>
                <InprogressSVG />
              </ListItemIcon>
              <ListItemText className={classes.linkRoute}>In Progress</ListItemText>
            </ListItem>
          </Link>
          <Link to="/completed" className={classes.linkTag}>
            <ListItem button>
              <ListItemIcon>
                <CompletedSVG />
              </ListItemIcon>
              <ListItemText className={classes.linkRoute}>Completed</ListItemText>
            </ListItem>
          </Link>
          <Link to="/payinterest" className={classes.linkTag}>
            <ListItem button>
              <ListItemIcon>
                <PayinterestSVG />
              </ListItemIcon>
              <ListItemText className={classes.linkRoute}>Pay Interest</ListItemText>
            </ListItem>
          </Link>
          <Link to="/interesthistory" className={classes.linkTag}>
            <ListItem button>
              <ListItemIcon>
                <InteresthistorySVG />
              </ListItemIcon>
              <ListItemText className={classes.linkRoute}>Interest History</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Switch>
            {routePages.map((route) => (
              <Route key={route.path} path={route.path} component={route.component} exact />
            ))}
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Layout;
