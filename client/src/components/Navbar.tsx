import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface INavbarProps {
    theme: any
}

const Navbar: React.FunctionComponent<INavbarProps> = ({theme}) => {
  return (
    <AppBar
    position="static"
    color="primary"
    elevation={0}
    sx={{ borderBottom: (theme) => `2px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography color="secondary" noWrap sx={{ flexGrow: 1 }}>
        Company name
      </Typography>
      <nav>
        <Link
          type="button"
          color="white"
          to="/list"
        >
          Features
        </Link>
        <Link
          type="button"
          color="white"
          to="/"
          
        >
          Enterprise
        </Link>
        <Link
          type="button"
          color="white"
          to="/list"
        >
          Support
        </Link>
      </nav>
      <Button type="button" color="secondary">
        <Link to="">
            Login
        </Link>
      </Button>
    </Toolbar>
  </AppBar>
  ) ;
};

export default Navbar;
