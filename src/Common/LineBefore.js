import { styled } from '@mui/material'
const LineBefore = styled()(({theme}) => ({
      '&:before': {
          content: '" "',
          position: 'absolute',
          bottom: '-8px',
          left: '0',
          height: '1.5px',
          width: '100%',
          backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, transparent)`
      },
}))

export default LineBefore
