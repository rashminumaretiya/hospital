import React from 'react'
import CustomBox from './CustomBox'
import CustomLink from './CustomLink';
import CustomTypography from './CustomTypography';
import { Breadcrumbs, styled } from '@mui/material';
import CustomContainer from './CustomContainer';
import theme from '../Theme';
import { Link } from 'react-router-dom';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const BreadCrumbSection = styled(CustomBox)(({ theme, backgroundImage }) => ({
    background: `url(${backgroundImage})`,
    padding: '100px 0',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    '&:before': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: theme.palette.primary.main,
        opacity: 0.3,
    }
}))
const BreadCrumbHead = styled(CustomBox)(({ theme }) => ({
    '& > .MuiTypography-h2': {
        [theme.breakpoints.down('md')]: {
            fontSize: "50px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "40px",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "35px",
        },
    }
}))
const BreadcrumbStyled = styled(Breadcrumbs)(({ theme }) => ({
    textAlign: 'center',
    '& > .MuiBreadcrumbs-ol': {
        padding: '5px 20px',
        borderRadius: 5,
        background: 'rgba(3, 13, 35, 0.4)',
        backdropFilter: 'blur(6.5px)',
        display: 'inline-flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '5px 16px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '4px 12px',
        },
        '& > .MuiBreadcrumbs-li': {
            '& > a': {
                color: theme.palette.common.white,
                fontWeight: 600,
                fontSize: 20,
                transition: 'all .3s ease-in-out',
                textDecoration: 'none',
                '&:hover': {
                    color: theme.palette.primary.main
                },
                [theme.breakpoints.down('md')]: {
                    fontSize: 18,
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: 16,
                },
                [theme.breakpoints.down('xs')]: {
                    fontSize: 14,
                },
            },
            '& > .MuiTypography-subtitle1': {
                fontSize: 20,
                fontWeight: 600,
                color: theme.palette.primary.light,
                [theme.breakpoints.down('md')]: {
                    fontSize: 18,
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: 16,
                },
                [theme.breakpoints.down('xs')]: {
                    fontSize: 14,
                },
            },
        }
    }
}))
const CustomBreadcrumb = ({ pageTitle, backgroundImage }) => {
    return (
        <BreadCrumbSection role="presentation" onClick={handleClick} backgroundImage={backgroundImage}>
            <CustomContainer>
                <BreadCrumbHead sx={{ zIndex: 1010, position: 'relative' }}>
                    <CustomTypography component={'h3'} variant={'h2'} textTransform={'capitalize'} textAlign={'center'} fontWeight={theme.typography.fontWeightBold} color={theme.palette.common.white} mb={2}>
                        {pageTitle}
                    </CustomTypography>
                    <BreadcrumbStyled aria-label="breadcrumb">
                        <Link
                            to='/home'
                        >
                            Home
                        </Link>
                        <CustomTypography variant="subtitle1">{pageTitle}</CustomTypography>
                    </BreadcrumbStyled>
                </BreadCrumbHead>
            </CustomContainer>
        </BreadCrumbSection>
    )
}

export default CustomBreadcrumb
