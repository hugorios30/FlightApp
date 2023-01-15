import * as React from 'react';

import TextInput from './TextInput';
import InputAdornment from '@mui/material/InputAdornment';

import AddLocationIcon from '@mui/icons-material/AddLocation';
import { TextFieldProps } from '@mui/material';



const CityInput: React.JSXElementConstructor<TextFieldProps> = (props) => {

    return (
        <>
            <TextInput {...props} InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AddLocationIcon color="secondary" fontSize="large" />
                    </InputAdornment>
                ),
            }}>
            </TextInput>
        </>
    );
};

export default CityInput;
