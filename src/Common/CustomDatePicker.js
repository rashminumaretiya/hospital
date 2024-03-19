import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material';
const DatePickerStyled = styled(DatePicker)(({ theme }) => ({
  width: '100%',
  '& > .MuiOutlinedInput-root': {
    borderRadius: '15px',
    background: '#65b5ff21',
    '& > .MuiOutlinedInput-input': {
      '&::placeholder': {
        fontSize: 15
      },
      [theme.breakpoints.down('xs')]:{
        padding:10
      }
    },
    '& > .MuiInputAdornment-root':{
      '& > .MuiIconButton-root':{
        [theme.breakpoints.down('mxl')]:{
          padding:2
        }
      }
    },
    '& > fieldset': {
      border: 'none',
    }
  }
}))
const CustomDatePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerStyled />
    </LocalizationProvider>
  )
}

export default CustomDatePicker
