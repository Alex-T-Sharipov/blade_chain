import React, { useContext } from 'react'
import {styled, Typography, Link, Box, Button} from '@mui/material'
import AuthContext from '../context/AuthContext'

const Container = styled('div')({
    display: 'flex',
    height: '72px',
    width: '100%',
    padding: '0px 40px',
    alignItems: 'center',
    justifyContent:'space-between',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
    
})
const StyledButton = styled(Button)({
    backgroundColor: 'rgba(46, 46, 46, 0.9)',
    color: '#fff',
    "&:hover": {
        backgroundColor:'rgb(46, 46, 46)'
    }
})

const StyledLink = styled(Link)({
    color: 'rgba(4, 17, 29, 0.75)',
    underline: 'none',
    "&:hover": {
        color: 'rgb(4, 17, 29)'
    }

})

const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext)
    return (
        <Container>
            <StyledLink href="/" underline="none" >
                <Typography variant={"h5"} sx={{color: 'rgb(4, 17, 29)', fontWeigth: '500'}}>
                    BladeChain
                </Typography>
            </StyledLink>
            <Box sx={{
                display: 'flex',
                justifyContent:'center',
                width: 'fit-content',
                padding: '0 100px',
                gap: '72px',
                fontSize: '36px',
            }}>
            {user ? 
            <>
            <StyledLink href='/quests' underline="none">
                    <Typography variant={'h6'} >
                        Quests
                    </Typography>
            </StyledLink>
            <StyledLink href='/market' underline="none">
                    <Typography variant={'h6'}>
                        Market
                    </Typography>
            </StyledLink>
            <StyledLink href='/profile' underline="none">
                    <Typography variant={'h6'}>
                        Profile
                    </Typography>
            </StyledLink>
            <StyledButton onClick={logoutUser}>Log Out</StyledButton>
            </>
             :
             <>
             <StyledLink href='/login' underline='none'>
             <Typography variant={'h6'}>
                        Login
                    </Typography>
             </StyledLink>
             <StyledLink href='/register' underline='none'>
             <Typography variant={'h6'}>
                        Register
                    </Typography>
             </StyledLink>
             </>
             }
           
           </Box>
        </Container>
    )
}

export default Navbar
