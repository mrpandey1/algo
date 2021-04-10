import React from 'react';
import { Typography, Button, Container, makeStyles, TextField, } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


import axios from 'axios'
import { useState } from 'react'


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
});

const Main = () => {


    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = () => {
        // console.log('hey')
        var data = JSON.stringify({ "url": url, "title": title, "content": content });


        var config = {
            method: 'post',
            url: '/fakebox/check',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const classes = useStyles();


    return (
        <div>
            <Container maxWidth="sm">
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        onChange={(e) => setTitle(e.target.value)}
                        className={classes.field}
                        label="Title"
                        variant="outlined"
                        color="primary"
                        fullWidth
                    />
                    <TextField
                        onChange={(e) => setUrl(e.target.value)}
                        className={classes.field}
                        label="URL"
                        variant="outlined"
                        color="primary"
                        fullWidth
                    />
                    <TextField
                        onChange={(e) => setContent(e.target.value)}
                        className={classes.field}
                        label="Content"
                        variant="outlined"
                        color="primary"
                        multiline
                        rows={4}
                        fullWidth
                    />

                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        endIcon={<KeyboardArrowRightIcon />}
                    >
                        Submit
        </Button>
                </form>

            </Container>
        </div>
    )
}

export default Main
