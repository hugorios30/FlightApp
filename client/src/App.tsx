import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/Login';
import Navbar from './components/Navbar';
import Pricing from './components/FlightList';
import {themeOptions} from './theme';

const theme = createTheme(themeOptions);

export interface IAppProps {
}

export interface IAppState {
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
  }

render() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
            <CssBaseline />
            <Navbar theme={theme}></Navbar>
                <Routes>
                    <Route path='/' element={<LogIn/>} />
                    <Route path='/list' element={Pricing()} />
                </Routes>
            </Container>
        </ThemeProvider>
    );
  }
}
