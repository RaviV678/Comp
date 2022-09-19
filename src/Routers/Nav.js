import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';
import Grids from './Grids';


export default function Nav() {
  return (
    <>
    <Box sx={{ flexGrow: 5}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/Contents'>Image</Link>
          </Typography>
          <Button color="inherit"><Link to='/UseriN'>Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Grids/>
    </>
  );
}
