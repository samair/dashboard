import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Switch, withRouter,Link} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DevicesIcon from '@material-ui/icons/Devices';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LinkListItem from './LinkListItem'
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function PageLayout(props) {
  const classes = useStyles();
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
        // See https://github.com/ReactTraining/react-router/issues/6056
        <Link to="/" {...linkProps} innerRef={ref} />
      )),
    [to],
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            AlphaMon
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
            <LinkListItem to="/" primary="Devices" icon={<DevicesIcon /> } />
            <LinkListItem to="/drafts" primary="Reports" icon={<ShowChartIcon />} />
        </List>
        <Divider />
        <List>
        <LinkListItem to="/keys" primary="Keys" icon={<VpnKeyIcon />} />
        </List>
      </Drawer>
     
    </div>
  );
}
