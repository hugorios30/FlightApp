import * as React from 'react';
import Box from '@mui/material/Box';
import dayjs, { Dayjs } from 'dayjs';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextInput from './TextInput'
import { LocalizationProvider } from '@mui/x-date-pickers';

const CalendarInput = () => {

  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  console.log(value)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disablePast={true}
        label="When do you want to trave?"
        value={value}
        onChange={(newValue) => {
          setValue(dayjs(newValue));
        }}
        renderInput={() => (<TextInput InputProps={{startAdornment: (
            <InputAdornment position="start">
            <CalendarMonthIcon color="secondary" fontSize="large" />
        </InputAdornment>
        )}}></TextInput>)}
      />
    </LocalizationProvider>
  );
}

export default function showCalendar(){

  return <CalendarInput></CalendarInput>;
}
