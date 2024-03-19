import { styled } from '@mui/material';
import CustomNavLink from './CustomNavLink';
import CustomStyled from './CustomStyled';
const HeaderMenuItem = styled(CustomNavLink)(({ theme }) => ({
    position: 'relative',
    color: theme.palette.primary.dark,
    display: 'block',
    textDecoration: 'none',
    position: 'relative',
    fontWeight: theme.typography.fontWeight[500],
    fontSize: 16,
    padding: '32px 15px',
    transition: `${theme.transitions.duration.standard}ms ,${theme.transitions.easing.easeOut}`,
    [theme.breakpoints.down('md')]: {
        marginRight: 0,
        padding: '15px 15px',
    },
    '&:before': {
        content: '" "',
        position: 'absolute',
        height: 2,
        width: 0,
        display: 'block',
        transition: `${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut}`,
        bottom: '20%',
        backgroundColor: theme.palette.primary.main,
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        height: 5,
        width: 5,
        display: 'block',
        top: '50%',
        transform: 'translateY(-50%)',
        right: 0,
        transition: `${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut}`,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
    },
    ':hover': {
        color: theme.palette.primary.main,
        '&:before': {
            width: 50
        },
        '& > .MuiBox-root': {
            display: 'block',
            transform: 'scale(1)',
            opacity: 1,
            visibility: 'visible',
        }
    },
}));
const HeaderMenu = ({ to, children }) => {
    return (
        <HeaderMenuItem to={to}>{children}</HeaderMenuItem>
    )
}

export default HeaderMenu;
