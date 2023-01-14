import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';

export const InputTextField = styled(TextField)<TextFieldProps>({
    '& label.Mui-focused': {
        color: '#e3c40b',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#e3c40b',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#e3c40b',
        },
        '&:hover fieldset': {
            borderColor: '#e3c40b',
            borderSize: '2px'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#e3c40b',
            borderSize: '2px',
            
        },
    },
    '& .MuiInputBase-input': {
        backgroundColor: '#02122c',
        color: 'white'
    },
    color: 'white',
});

const TextInput: React.JSXElementConstructor<TextFieldProps> = (props) => {
    
    return (
        <Box>
            <FormControl variant="standard">
                <InputTextField {...props}/>
            </FormControl>
        </Box>
    );
};

export default TextInput;
