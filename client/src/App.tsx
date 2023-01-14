import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/templates/Login';
import Navbar from './components/templates/Navbar';
import Pricing from './components/templates/FlightList';
import {themeOptions} from './theme';

const theme = createTheme(themeOptions);

export default class App extends React.Component {

render() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
            <CssBaseline />
                <Routes>
                    <Route path='/' element={<LogIn isNewAccount={true}/>} />
                    <Route path='/list' element={Pricing()} />
                </Routes>
            </Container>
        </ThemeProvider>
    );
  }
}
