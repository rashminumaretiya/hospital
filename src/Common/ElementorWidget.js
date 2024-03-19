import React from 'react'
import CustomBox from './CustomBox'
import CustomTypography from './CustomTypography'
import { styled } from '@mui/material'
import ElementClipPath from './ElementClipPath'
const ElementSingle = styled(CustomBox)(({ conditionTwo }) => ({
    transition: 'all .3s ease-in-out',
    '&:hover': {
        transform: 'translate(0,-10px)'
    },
}))
const ElementorWidgetText = styled(CustomBox)(({ theme, fontSize, conditionTwo }) => ({
    position: 'relative',
    zIndex: 1,
    flex: conditionTwo ? null : 1,
    [theme.breakpoints.down('xs')]: {
        marginTop: 10,
        textAlign:conditionTwo ? null : 'center',
    },
    '& > .MuiTypography-h2': {
        position: 'relative',
        paddingTop: conditionTwo ? '15px' : null,
        fontSize: fontSize,
        color: theme.palette.common.white ,
        fontWeight: '600',
        borderTop: conditionTwo ? `1px solid rgba(${parseInt(theme.palette.primary.light.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.light.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.light.slice(5, 7), 16)}, 0.5)` : null,
        [theme.breakpoints.down('md')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 18,
        },
    },
    '& > .MuiTypography-body2': {
        padding: '20px 20px 0px 0',
        color: theme.palette.common.white,
        fontWeight: 500,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        marginBottom: 0,
        [theme.breakpoints.down('md')]: {
            padding: '35px 10px 0px 0',
            fontSize: 14,
        },
        [theme.breakpoints.down('xs')]: {
            padding: '12px 10px 0px 0',
            fontSize: 14,
        }
    },
    '& > .MuiTypography-body1': {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: conditionTwo ? 2 : 1,
        overflow: 'hidden',
        paddingTop: 12,
        fontWeight: 500,
        color: theme.palette.common.white,
        fontSize: conditionTwo ? null : 14,
        [theme.breakpoints.down('sm')]:{
            paddingTop: 6,
            fontSize:12,
        }
    }
}))
const ElementorWidget = ({ icon, TitleFontSize, conditionTwo, title, desc, background, backgroundSize, subtitle, borderRadius, children, condition, btnTextColor, overflow, before, backgroundButton,padding }) => {
    return (
        <ElementSingle position="relative" condition={condition} conditionTwo={conditionTwo} >
            <ElementClipPath icon={icon} background={background} backgroundSize={backgroundSize} padding={padding} backgroundPosition={'center top'} bottom={0} overflow={overflow} before={before} borderRadius={borderRadius} condition={condition} color={btnTextColor} backgroundColor={backgroundButton}>
                <ElementorWidgetText conditionTwo={conditionTwo}>
                    {
                        title &&
                        <CustomTypography variant='h2' component='h4' fontSize={TitleFontSize}>{title}</CustomTypography>
                    }
                    {
                        desc &&
                        <CustomTypography variant="body2" component='p'>{desc}</CustomTypography>
                    }
                    {
                        subtitle &&
                        <CustomTypography variant='body1' component='p'>{subtitle}</CustomTypography>
                    }
                    {children}
                </ElementorWidgetText>
            </ElementClipPath>
        </ElementSingle>
    )
}

export default ElementorWidget
