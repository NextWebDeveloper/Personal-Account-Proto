import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    singleNewsWrapper: {
        width: '100%',
        maxWidth: '800px',
        padding: '1.5rem',
        border: '1px solid #eee',
        margin: '2rem auto 0',
        boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        marginBottom: '2rem',
        display: 'flex'
    },
    newsImageWrapper: {
        width: '40%', 
        flexShrink: '0',
        marginRight: '16px',
        height: '150px',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    singleNewsTitle: {
        marginTop: '0'
    }
}));

const NewsList = ({news}) => {

    const classes = useStyles();

    const newsListContent = news.length === 0 ? <h2>You have not created any news yet :( Click the button in the upper right to add your first news!</h2> : ( news.map(singleNews => {
        console.log(singleNews)
        return (
            <Box
                className={classes.singleNewsWrapper}
                key={singleNews.title}>
                <Box
                    style={{ backgroundImage: `url(${singleNews.image})` }} 
                    className={classes.newsImageWrapper}>
                </Box>
                <Box 
                    display="flex" 
                    flexDirection="column">
                    <h2 
                        className={classes.singleNewsTitle}>
                        id:{singleNews.id} - {singleNews.title}</h2>
                    <Box>
                        Last edit time: { singleNews.lastEditTime }
                    </Box>
                    <Box mt="auto">
                        <Box 
                            component="span" 
                            mr={1}>
                            <Button 
                                component={Link} 
                                to="/news/add"
                                variant="contained"
                                size="large"
                                color="primary">Edit news
                            </Button>
                        </Box>
                        <Button 
                            
                            variant="contained"
                            size="large"
                            color="secondary">Delete news
                        </Button>
                    </Box>
                </Box>
            </Box>
        )
    }) )


    return (
        <Box>
            <Box display="flex" justifyContent="flex-end">
                <Button 
                    component={Link} 
                    to="/news/add"
                    variant="contained"
                    size="large"
                    color="primary">Add news
                </Button>
            </Box>

            {newsListContent}




        </Box>
    )
}

const mapStateToProps = state => ({ news: state.news })

export default connect(mapStateToProps)(NewsList);