import React, { useState, useEffect, useRef } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    saveNews
} from '../../modules/news'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

import loader from '../../assets/loader.svg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    authPage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        padding: '8px 16px'
    },
    authWindow: {
        width: '100%',
        maxWidth: '500px',
        padding: '1rem 1.5rem',
        border: '1px solid #eee',
        boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.1)',
        borderRadius: '8px'
    },
    displayNone: {
        display: 'none'
    },
    authLoader: {
        height: '100px'
    },
    authLoaderWrapper: {
        padding: '85px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));


const Auth = ({ history }) => {

    const classes = useStyles();

    const [auth, setAuth] = useState({
        login: '',
        password: ''
    });

    const [validationErrors, setValidationErrors] = useState({
        login: false,
        password: false
    });

    const [authInProgress, setAuthInProgress] = useState(false);

    const [authWrongData, setAuthWrongData] = useState(false);

    const checkAuth = () => {
        return auth.login === 'AwesomeUser' && auth.password === 'qwerty'
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        for (let i in validationErrors) {
            setValidationErrors((validationErrors) => ({
                ...validationErrors,
                [i]: auth[i] ? false : true
            }));
        }

        if (auth.login && auth.password) {
            setAuthInProgress(true)
            setTimeout(() => {
                if (checkAuth(auth)) {
                    history.push('/news');
                } else {
                    setAuthWrongData(true)
                }
                setAuthInProgress(false)
            }, 1000)
        }

    }

    const handleInputChange = (e) => {
        setAuth({
            ...auth,
            [e.target.name]: e.target.value
        });
        setValidationErrors({
            ...validationErrors,
            [e.target.name]: e.target.value.length > 0 ? false : true
        });
    }

    const formAuth = (
        <form
            onSubmit={handleSubmit}>
            <h1>Authentication required</h1>
            { authWrongData ? <Box mb={2} color='error.main'>The entered data is incorrect. Try again</Box> : null}
            <Box mb={3}>
                <TextField
                    value={auth.login}
                    error={validationErrors.login}
                    name="login"
                    fullWidth
                    label="Login" 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    variant="outlined"
                    helperText={`${validationErrors.login ? 'Enter login' : ''}`}
                    onChange={handleInputChange} />
            </Box>
            <Box mb={3}>
                <TextField
                    value={auth.password}
                    error={validationErrors.password}
                    name="password"
                    type="password"
                    fullWidth
                    label="Password" 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                    variant="outlined"
                    helperText={`${validationErrors.password ? 'Enter password' : ''}`}
                    onChange={handleInputChange} />
            </Box>
            <Box
                display="flex"
                justifyContent="center">
                <Button
                    variant="contained"
                    type="submit"
                    label="Submit"
                    size="large"
                    color="primary">Log in
            </Button>
            </Box>
        </form>
    )

    const authLoader = (
        <Box className={classes.authLoaderWrapper}>
            <img className={classes.authLoader} src={loader} alt="loader" />
        </Box>
    )

    const authContent = authInProgress ? authLoader : formAuth

    return (
        <Box className={classes.authPage}>
            <Box className={classes.authWindow}>
                {authContent}
            </Box>
        </Box>
    )
}

export default Auth;