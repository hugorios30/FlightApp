import * as React from 'react';
import Box from '@mui/material/Box';
import dayjs, { Dayjs } from 'dayjs';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextInput from './TextInput'
import { LocalizationProvider } from '@mui/x-date-pickers';

const CalendarIcon = () => <CalendarMonthIcon color="secondary" fontSize="large" />

interface ICalendarProps {

}

const CalendarInput:  React.JSXElementConstructor<ICalendarProps> = (props) => {

  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  console.log(value?.toDate().toLocaleDateString())

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        disablePast={true}
        components={{OpenPickerIcon: CalendarIcon
        }}
        label="When do you want to travel?"
        value={value}
        inputFormat="MM/DD/YYYY"
        InputAdornmentProps={{position: 'start'}}
        onChange={(newValue) => {
          setValue(dayjs(newValue));
        }}
          renderInput={(props) => (<TextInput {...props}>
            
          </TextInput>)}
          {...props}
      />
    </LocalizationProvider>
  );
}

export default CalendarInput;
