import { AppBar, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import AccentButton from '../UI/AccentButton';
//import Img from 'src/assets/images/plane_blue.png';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      sx={{ borderBottom: '2px solid gray' }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography color="secondary" noWrap sx={{ flexGrow: 1 }}>
          UGO
        </Typography>
        <nav>
          <Link
            type="button"
            color="white"
            to="/search"
            style={{ flexGrow: 1, marginRight: '15px', textDecoration: 'none' }}
          >
            Search
          </Link>
          <Link
            type="button"
            color="white"
            to="/liked"
            style={{ flexGrow: 1, marginRight: '15px', textDecoration: 'none' }}
          >
            Liked
          </Link>
          <Link
            type="button"
            color="white"
            to="/booked"
            style={{ flexGrow: 1, marginRight: '15px', textDecoration: 'none' }}
          >
            Booked
          </Link>
        </nav>
        <AccentButton title="Sign Up">
          <Link to="/" style={{ flexGrow: 1, marginRight: '15px', textDecoration: 'none' }} />
        </AccentButton>
      </Toolbar >
    </AppBar >
  );
};

export default Navbar;
