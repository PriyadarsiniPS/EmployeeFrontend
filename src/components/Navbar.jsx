import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
          <Button><Link to={'/home'}>Home</Link></Button>
          <Button><Link to={'/form'}>Form</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
      
    
  )
}

export default Navbar
