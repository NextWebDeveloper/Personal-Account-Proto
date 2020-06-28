import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    clearToken
} from '../../modules/auth'
import {
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

import NewsList from '../../pages/NewsList'
import Auth from '../../pages/Auth'
import NewsForm from '../../pages/NewsForm'
import Sidebar from '../../components/sidebar'
import PrivateRoute from '../../containers/PrivateRoute'

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

const App = ({ isAuthenticated, authToken, clearToken }) => {

	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (isAuthenticated) {
			document.addEventListener("visibilitychange", () => {
				if (document.visibilityState === 'visible') {
					const tokenFromStorage = localStorage.getItem('authToken')
					if (tokenFromStorage !== authToken) {
						clearToken();
					}
				}
			});
		}
	}, [isAuthenticated])

	return (
		<Switch>
			<Route exact path="/auth" component={Auth} />
			<PrivateRoute isAuthenticated={isAuthenticated}>
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
							<Route path="*">
								<Redirect to="/news" />
          					</Route>
						</Switch>

					</main>
				</Box >
			</PrivateRoute>
		</Switch>
	);
}

const mapStateToProps = state => ({ isAuthenticated: state.authState.authToken !== null, authToken: state.authState.authToken })

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            clearToken
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(App);
