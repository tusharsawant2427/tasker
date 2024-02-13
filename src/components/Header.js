import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Logo from '../tasker-logo.png';
import React from 'react'

const Header = () => {
  return (
    <AppBar position="static" sx={{background: '#333'}}>
        <Container maxWidth='lg'>
        <Toolbar sx={{paddingLeft: '0!important'}}>
            <Typography  sx={{paddingLeft: '0'}} variant="h4" component="div">
                <img src={Logo} alt="Tasker Logo"  style={{height: '90px'}}/>
            </Typography>
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header;