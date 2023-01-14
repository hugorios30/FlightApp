import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Box } from '@mui/material';

interface IAccentButtonProps{
    children: never[],
    label: string,
    id: string,
    value?: string,
    size?: 'small' | 'medium' | undefined,
    required: boolean, 
}


const ColorButton = styled(Button)<ButtonProps>({
  color: 'black',
  backgroundColor: '#e3c40b',
  '&:hover': {
    backgroundColor: '#f39c12'
  }
});

const AccentButton : React.JSXElementConstructor<ButtonProps> = (props) => {
  return (
    <Box>
      <ColorButton variant="contained" {...props}>{props.title}</ColorButton>
    </Box>
  );
}

export default AccentButton;