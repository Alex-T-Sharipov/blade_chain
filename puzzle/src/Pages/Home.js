import React from 'react'
import {styled, Box, Button} from "@mui/material"
import HomeCard from '../Components/HomeCard'
import myArray from '../Data'

const StyledButton = styled(Button)({
    backgroundColor: 'rgba(46, 46, 46, 0.9)',
    height: '48px',
    "&:hover": {
        backgroundColor:'rgb(46, 46, 46)'
    }
})



const Home = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '80%',
                    gap: '40px',
                    overflowY: 'hidden',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    maxHeight: '400px',
                    padding: '20px 20px',
                }}
            >
            {myArray.map((element, index) => (
            <HomeCard 
                 key={index}
                 title={element.title} 
                 body={element.body}
                 image={element.img}
                 alt={element.alt}
                 id={element.id}
             />)
            )}
            </Box>
            <StyledButton variant="contained">
                Explore more
            </StyledButton>
        </>
    )
}

export default Home
