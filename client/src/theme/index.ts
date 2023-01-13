import { ThemeOptions } from "@mui/material/styles/createTheme";
import { withStyles } from "@material-ui/core/styles";
import LogIn from "../components/Login";

const styles = (theme: any) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  /* STYLES FOR THE OUTLINE BORDER */
  specialOutline: {
    borderColor: "#e3c40b",
    borderWidth: 1
  }
});


export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#02122c',
    },
    secondary: {
      main: '#e3c40b',
    },
    background: {
      default: '#02122C',
      paper: '#d9d9d9',
    },
    text: {
      primary: '#02122C',
      secondary: '#90949D',
    },
  },
};

export default withStyles(() => styles)(LogIn);