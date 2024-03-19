import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { styled } from '@mui/material';
const TimePickerStyled = styled(TimePicker)(({theme}) => ({
    width:'100%',
    '& > .MuiInputLabel-root':{
        fontSize:15,
    },
    '& > .MuiOutlinedInput-root':{
        borderRadius:15,
        background: '#65b5ff21',
        '& > fieldset' :{
            border:'none',
            
        }
    }
}))
const CustomTimePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['TimePicker']}> */}
        <TimePickerStyled label="Basic time picker"/>
      {/* </DemoContainer> */}
    </LocalizationProvider>
  )
}

export default CustomTimePicker
