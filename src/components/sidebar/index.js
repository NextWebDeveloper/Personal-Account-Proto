import React, { Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    clearToken
} from '../../modules/auth'
import { Link } from 'react-router-dom'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	menuLink: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '8px 16px',
		textDecoration: 'none',
		color: '#333',
		textTransform: 'none',
		fontWeight: '500',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	menuLinkTitle: {
		fontSize: '16px',
		marginLeft: '8px'
	},
	userTitle: {
		display: 'flex',
		alignItems: 'center',
	},
	userName: {
		marginLeft: '8px'
	}
}));

const Sidebar = ({ open, handleDrawerOpen, handleDrawerClose, clearToken }) => {

	const classes = useStyles();
	const theme = useTheme();

	const logOut = () => {
		clearToken();
	}

	return (
		<Fragment>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={() => handleDrawerOpen()}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography 
						className={classes.userTitle}
						variant="h6" 
						noWrap>
						<Icon>person</Icon>
						<span className={classes.userName}>AwesomeUser</span>
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={() => handleDrawerClose()}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<Link
					className={classes.menuLink}
					to='/news'>
					<Icon>list_alt</Icon>
					<span className={classes.menuLinkTitle}>News</span>
				</Link>
				<Divider />
				<Button 
					onClick={logOut}
					className={classes.menuLink}>
					<Icon>exit_to_app</Icon>
					<span className={classes.menuLinkTitle}>Logout</span>
				</Button>
			</Drawer>
		</Fragment>
	)
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            clearToken
        },
        dispatch
    )

export default connect(null, mapDispatchToProps)(Sidebar);