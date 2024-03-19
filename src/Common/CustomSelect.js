import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import CustomBox from './CustomBox';
import { styled } from '@mui/material';

const SelectStyled = styled(CustomBox)(({theme}) => ({
    '& > .MuiInput-root' : {
        width:'100%',
        borderRadius: '14px',
        background: '#65b5ff21',
        '&:before' : {
            borderBottom:'none'
        },
        '&:after' : {
            borderBottom:'none'
        },
        "&:hover":{
            '&:before' : {
                borderBottom:'none !important'
            },
        },
        '& > .MuiInput-input' : {
            fontSize:14,
            padding: '16.5px 14px',
            '&:focus':{
                background:'none',
            },
            [theme.breakpoints.down('xs')]:{
                padding:10,
            }
        }
    }
}))
const CustomSelect = ({ select,SelectData}) => {
    return (
            // <FormControl fullWidth>
            <SelectStyled sx={{width:'100%'}}>
                <NativeSelect
                    // inputProps={{
                        //     name: 'age',
                        //     id: 'uncontrolled-native',
                        // }}
                        >
                    <option value={null} style={{color:"common.white"}}>{select}</option>
                    {SelectData.map((data, index) => (
                        <option key={index} value={data.selectValue}>
                            {data.selectValue}
                        </option>
                    ))}
                </NativeSelect>
            </SelectStyled>
    )
}

export default CustomSelect
