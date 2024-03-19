import React from 'react'
import CustomBox from './CustomBox'
import { styled } from '@mui/material'
import CustomStack from './CustomStack'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const SocailIcon = [
    {
        icon:<FacebookIcon />, 
    },
    {
        icon: <InstagramIcon />
    },
    {
        icon: <TwitterIcon />, 
    },
    {
        icon: <LinkedInIcon />, 
    }
]
const AnchorTag = styled(CustomBox)(({theme,condition,sizeCondicition,marginBottom,boxShadow}) => ({
    display:'block',
    padding:'10px',
    textAlign:'center',
    backgroundColor:'transparent',
    height:sizeCondicition ? 25 : 16,
    width:sizeCondicition ? 25 : 16,
    borderRadius:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: `${marginBottom}`,
    transition:'.3s',
    '& > .MuiSvgIcon-root':{
        height:18,
        width:18,
        transition:'.3s all',
        color: condition ? theme.palette.primary.main : theme.palette.common.white,
    },
    "&:hover":{
        backgroundColor: condition ? theme.palette.primary.main : theme.palette.common.white,
        '& > .MuiSvgIcon-root':{
            color:condition ?  theme.palette.common.white :  theme.palette.primary.main,
        }
    }
}))
const Social = ({icon, condition, sizeCondicition, margin, boxShadow, ...props}) => {
  return (
    <CustomStack 
        {...props}
    >
        {SocailIcon.map((data,index) => (
            <AnchorTag component={'a'} href="#" condition={condition} sizeCondicition={sizeCondicition} margin={margin} key={index} boxShadow={boxShadow}>
                {data.icon}
            </AnchorTag>
        ))}
    </CustomStack>
  )
}

export default Social
