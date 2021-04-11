import { AppBar, Toolbar, Typography } from '@material-ui/core';

import React from 'react'

const Header = () => {
    return (
        <div>
            <AppBar
                elevation={1}
                position="static"
            >
                <Toolbar>
                    <Typography variant="h6" align="center">
                        Fake News
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;