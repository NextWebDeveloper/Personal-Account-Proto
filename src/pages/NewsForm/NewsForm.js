import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    saveNews
} from '../../modules/news'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    newsForm: {
        width: '100%',
        maxWidth: '600px',
        padding: '2rem 1.5rem',
        border: '1px solid #eee',
        margin: '2rem auto 0',
        boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.1)',
        borderRadius: '8px'
    },
    alert: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem'
    },
    newsImageWrapper: {
        width: '100%',
        height: '300px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginBottom: '24px'
    },
    displayNone: {
        display: 'none'
    }
}));


const NewsForm = ({ location, saveNews, history }) => {

    const classes = useStyles();

    const [news, setNews] = useState(location.news ? { ...location.news } : {
        title: '',
        description: '',
        image: ''
    });

    const [validationErrors, setValidationErrors] = useState({
        title: false,
        description: false,
        image: false
    })

    const [alertVisible, setAlertVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i in validationErrors) {
            setValidationErrors((validationErrors) => ({
                ...validationErrors,
                [i]: news[i] ? false : true
            }));
        }

        if (news.title && news.description && news.image) {
            saveNews(news);
            history.push('/news');
        }

    }

    const handleInputChange = (e) => {
        setNews({
            ...news,
            [e.target.name]: e.target.value
        });
        setValidationErrors({
            ...validationErrors,
            [e.target.name]: e.target.value.length > 0 ? false : true
        });
    }

    const onFileUploaded = (e) => {
        const uploadedFile = e.target.files[0];

        if (!/image/.test(uploadedFile.type)) {
            setAlertVisible(true)
            setTimeout(() => {
                setAlertVisible(false)
            }, 3000)
            return
        }

        if (validationErrors.image) {
            setValidationErrors({
                ...validationErrors,
                image: false
            });
        }

        const reader = new FileReader();
        let image64;
        reader.onloadend = function () {
            image64 = reader.result;
            setNews({
                ...news,
                image: image64
            });
        };
        reader.readAsDataURL(uploadedFile);
    }

    return (
        <Box>
            <form
                className={classes.newsForm}
                onSubmit={handleSubmit}>
                <Box
                    style={{ backgroundImage: `url(${news.image})` }}
                    className={`${classes.newsImageWrapper}${news.image ? '' : classes.displayNone}`}>
                </Box>
                <Box mb={3}>
                    <TextField
                        value={news.title || ''}
                        error={validationErrors.title}
                        name="title"
                        fullWidth
                        label="News title"
                        variant="outlined"
                        helperText={`${validationErrors.title ? 'Enter news title' : ''}`}
                        onChange={handleInputChange} />
                </Box>
                <Box mb={3}>
                    <TextField
                        value={news.description || ''}
                        error={validationErrors.description}
                        name="description"
                        label="News description"
                        fullWidth
                        rowsMax={4}
                        multiline
                        variant="outlined"
                        helperText={`${validationErrors.description ? 'Enter news description' : ''}`}
                        onChange={handleInputChange} />
                </Box>
                <Box
                    mb={3}>
                    <input
                        color="primary"
                        accept="image/*"
                        type="file"
                        onChange={onFileUploaded}
                        id="icon-button-file"
                        style={{ display: 'none', }}
                    />
                    <label htmlFor="icon-button-file">
                        <Button
                            variant="outlined"
                            type="text"
                            component="span"
                            size="large"
                            color={`${validationErrors.image ? 'secondary' : 'primary'}`}
                        >
                            <Icon>add_photo_alternate</Icon>
                            <Box ml={1}>Upload image</Box>
                        </Button>
                    </label>
                </Box>

                <Box
                    display="flex"
                    justifyContent="center">
                    <Button
                        variant="contained"
                        type="submit"
                        label="Submit"
                        size="large"
                        color="primary">Save news
                    </Button>
                </Box>

            </form>
            <Box
                display={`${alertVisible ? 'block' : 'none'}`}
                className={classes.alert}>
                <Alert severity="error">Wrong file format<br />Upload image type file</Alert>
            </Box>
        </Box>

    )
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            saveNews
        },
        dispatch
    )

export default connect(
    null,
    mapDispatchToProps
)(NewsForm)
