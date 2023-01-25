import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CityInput from '../UI/CityInput';
import CalendarInput from '../UI/CalendarInput';
import AmountInput from '../UI/AmountInput'
import { Stack } from '@mui/material';
import AccentButton from '../UI/AccentButton';




function SearchForm() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ backgroundColor: 'white', height: '250px' }}>
        <Box component="section" pt="40px">
          <Grid container style={{ padding: '15px' }} sx={{ height: '150px', backgroundColor: '#02122c' }}>
            <Typography component="h5" variant="h5" sx={{ color: 'white' }}>Search your flight</Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <CityInput
                name="from"
                id="from"
                type="text"
                required={true}
                label="where do you travel from?"></CityInput>
              <CityInput
                id="toGo"
                name="toGo"
                type="text"
                required={true}
                label="where do you want to go?"></CityInput>
              <CalendarInput></CalendarInput>
              <AmountInput
                name="amount"
                id="amount"
                type="number"
                required={true}
                label="what is your budget?"></AmountInput>
              <AccentButton title="Search"></AccentButton>
            </Stack>
          </Grid>
        </Box>
      </Container>

    </React.Fragment>
  );
}

export default function search() {
  return <SearchForm />;
}