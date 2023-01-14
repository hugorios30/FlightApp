import * as React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextInput from '../UI/TextInput';
import AccentButton from '../UI/AccentButton';

import UsersDataService from '../../services/users.service'

export interface ILoginProps {
  isNewAccount: boolean,
}

export default class Login extends React.Component<ILoginProps> {

  constructor(props: ILoginProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: {value: string},
      email: { value: string };
      password: { value: string };
    };
    console.log(target.name.value, target.email.value, target.password.value)
    //SEND DATA TO BACKEND
    try {
      if(this.props.isNewAccount){
        let formData = {name: target.name.value, email: target.email.value, password: target.password.value }
        const userData = await UsersDataService.create(formData);
        console.log('JSON DATA', userData)
      }

    } catch (error) {
      console.log(error)
    }
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
              name="name"
              type="text"
              required={true}
            >
            </TextInput> : null}
          <TextInput
            name="email"
            label="email"
            id="email"
            type="email"
            required={true}>
          </TextInput>
          <TextInput
            label="password"
            id="password"
            type="password"
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