import React, { Fragment } from 'react'
import { 
	Route,
	Switch
 } from 'react-router-dom'

import NewsList from '../../pages/NewsList'
import Auth from '../../pages/Auth'
import NewsForm from '../../pages/NewsForm'
import Sidebar from '../../components/sidebar'

import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

const App = () => {

	const classes = useStyles();
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Switch>
			<Route exact path="/auth" component={Auth} />
			<Fragment>
				<Box className={classes.root}>
					<Sidebar
						open={open}
						handleDrawerOpen={handleDrawerOpen}
						handleDrawerClose={handleDrawerClose} />
					<main
						className={clsx(classes.content, {
							[classes.contentShift]: open,
						})}
					>
						<div className={classes.drawerHeader} />
						
						<Switch>
							<Route exact path="/news" component={NewsList} />
							<Route exact path="/news/add" component={NewsForm} />
							<Route exact path="/news/:id" component={NewsForm} />
						</Switch>

					</main>
				</Box >
			</Fragment>

		</Switch>
	);
}

export default App
