import React from 'react'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import Heading from '../Common/Heading'
import CustomTypography from '../Common/CustomTypography'
import CustomAccordian from '../Common/CustomAccordian'
import CustomBox from '../Common/CustomBox'
import ServiceAccordian from '../Assets/jpg/service/ServiceAccordian.jpeg'
import theme from '../Theme'
import { styled } from '@mui/material'
const AccordianData = [
    {

        id: 'panel1',
        text: 'How to make an appointment at Dentata?',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit venenatis tempus orci ut lacinia. Sed tempor hendrerit fermentum Pellentesque.'
    },
    {
        id: 'panel2',
        text: 'Glasses required after laser eye surgery?',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit venenatis tempus orci ut lacinia. Sed tempor hendrerit fermentum Pellentesque.'
    },
    {
        id: 'panel3',
        text: 'What can we do for you with adobe zomla max?',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit venenatis tempus orci ut lacinia. Sed tempor hendrerit fermentum Pellentesque.'
    },
    {
        id: 'panel4',
        text: 'Is my microwave giving me cancer?',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit venenatis tempus orci ut lacinia. Sed tempor hendrerit fermentum Pellentesque.'
    },
]
const ImgBoxStyled = styled(CustomBox)(({theme}) => ({
    borderRadius: 2,
    overflow: 'hidden',
    textAlign: 'center',
    borderRadius: '50%',
    border:`8px solid ${theme.palette.common.white}`,
    '& > img':{
        height: '450px',
        // height: 'inherit',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
        [theme.breakpoints.down('sm')]:{
            height:'350px'
        }
    }
}))
const SerivecReview = () => {
    return (
        <CustomTypography component="section" variant="section" sx={{ background: theme.palette.primary[50]}}>
            <CustomContainer>
                <CustomGrid container justifyContent={'center'} alignItems={'center'} spacing={{md:8,sm:6}}>
                    <CustomGrid sm={5} xs={9} lxs={12}>
                        <ImgBoxStyled>
                            <CustomBox component='img' src={ServiceAccordian} />
                        </ImgBoxStyled>
                    </CustomGrid>
                    <CustomGrid sm={7} lxs={12}>
                        <Heading title={'Custious RESULTS'} sliderHeadingSmall='We Provide The Highest Level Of Care And Services' />
                        <CustomBox mt={5} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)", backgroundColor: theme.palette.common.white, paddingInline: {sm:8,xs:4,lxs:3} , paddingBlock:{sm:5,xs:3,lxs:2} }}>
                            {AccordianData.map((data, index) => (
                                <CustomAccordian key={index} {...data} />
                            ))}
                        </CustomBox>
                    </CustomGrid>
                </CustomGrid>
            </CustomContainer>
        </CustomTypography>
    )
}

export default SerivecReview
