import { TextField, styled } from '@mui/material'
import React from 'react'
const TextFieldStyled = styled(TextField)(({ theme, condition, conditionTwo }) => ({
    display: 'block',
    '& > .MuiOutlinedInput-root': {
        width: '100%',
        borderRadius: condition ? 24 : 14,
        background: condition ? theme.palette.common.white : '#65b5ff21',
        '& > .MuiOutlinedInput-input': {
            fontSize: 14,
            padding: condition ? (conditionTwo ? '16px 140px 16px 20px' : '16px 10px 16px 40px !important') : null,

            '&::placeholder': {
                color: theme.palette.primary.dark
            },
            [theme.breakpoints.down('xs')]: {
                padding: conditionTwo ? '12px 14px !important' : (condition ? '14px 130px 14px 14px !important' : 10),
            }
        },
        '& > fieldset': {
            border: 'none',
        }
    },
}))
const CommonInput = ({ type, placeholder, condition, conditionTwo, rows, inputProps, ...props }) => {
    return (
        <>
            <TextFieldStyled variant="outlined" type={type} placeholder={placeholder} name={placeholder} required condition={condition} conditionTwo={conditionTwo} inputProps={{ type: 'text' }} {...props} />
        </>
    )
}

export default CommonInput
