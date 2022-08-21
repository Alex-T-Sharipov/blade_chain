import React from 'react'
import HomeCard from '../Components/HomeCard'
import {Box, Grid, styled, Typography} from '@mui/material'
import myArray from '../Data'

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: "100%",
    margin: '40px 0px',
    overflow: 'scroll',

})

const Quests = () => {
    return (
        <Container>
        <Typography variant="h3" sx={{fontWeight: '600'}}>
            Quests
        </Typography>
        <Grid container 
            justifyContent="center"
            alignItems="center"
            spacing={8}
            sx={{padding: '20px 0px'}}
            >
            {myArray.map((element, index) => (
                <Grid item key={index}>
                      <HomeCard 
                 key={index}
                 title={element.title} 
                 body={element.body}
                 image={element.img}
                 alt={element.alt}
                 id={element.id}
             />
                </Grid>
          )
            )}
            </Grid>
            
        </Container>
    )
}

export default Quests
