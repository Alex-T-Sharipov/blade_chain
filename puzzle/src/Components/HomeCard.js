import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActionArea} from '@mui/material'
import {useNavigate} from 'react-router-dom'

const HomeCard = (props) => {
    let navigate = useNavigate()
    const link = `/quests/${props.id}`
    const handleClick = (event) => {
        event.preventDefault()
        navigate(link)

    }
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))
      

    return (
    <CardActionArea onClick={handleClick}>
        <Card sx={{maxWidth: '345px', minWidth: '345px'}}>
                <CardMedia
                    component="img"
                    alt={props.alt}
                    height="220"
                    image={images[props.image]}
                    
                />
                <CardContent sx={{height: '120px'}}>
                    <Typography component="div" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography component="div" variant="body1">
                        {props.body}
                    </Typography>
                </CardContent>
            </Card>
    </CardActionArea>
    )
}

export default HomeCard
