import * as React from 'react';

import TextInput from './TextInput';
import InputAdornment from '@mui/material/InputAdornment';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { TextFieldProps } from '@mui/material';



const AmountInput: React.JSXElementConstructor<TextFieldProps> = (props) => {

    return (
        <>
            <TextInput {...props} InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AttachMoneyIcon color="secondary" fontSize="large" />
                    </InputAdornment>
                ),
            }}>
            </TextInput>
        </>
    );
};

export default AmountInput;
