import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextInput from '../UI/TextInput';
import AccentButton from '../UI/AccentButton';

export interface ILoginProps {
  isNewAccount: boolean,
}

export default class Login extends React.Component<ILoginProps> {

  constructor(props: ILoginProps) {
    super(props);
  }


  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    //SEND DATA TO BACKEND
  };

  public render() {
    const { isNewAccount } = this.props
    return (
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" sx={{ color: "white", fontSize: 20 }}>
          WELCOME TO BUGO
        </Typography>
        <Typography component="h2" sx={{ color: "white", fontSize: 10 }}>
          Go to the best destination at the best price
        </Typography>
        {!isNewAccount ? <Typography component="h1" sx={{color: "white", fontSize: 10}}>
          Sign in
        </Typography> : null}
        <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
          {isNewAccount ?
            <TextInput
              label="name"
              id="name"
              required={true}>
            </TextInput> : null}
          <TextInput
            name="email"
            label="email"
            id="email"
            required={true}>
          </TextInput>
          <TextInput
            label="password"
            id="password"
            required={true}>
          </TextInput>
          <AccentButton
            type="submit"
            title={isNewAccount ? "Create Account" : "Sign In"}
            fullWidth>
          </AccentButton>
          {!isNewAccount ? <Grid container>
            <Grid item>
              <Link href="#" color="secondary" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> : null}
        </Box>
      </Box>
    );
  }
}