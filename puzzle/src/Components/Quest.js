import { Button,styled, Card, Box, CardMedia, CardContent, Typography, Divider, Grid, Paper} from '@mui/material'
import React, {useState, lazy, useEffect} from 'react'
import { useParams } from  'react-router-dom'
import myArray from '../Data'



const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '20px',
    width: '100%',
    height: "100%",
    margin: '40px 0px'

})

const StyledButton = styled(Button)({
    backgroundColor: 'rgba(46, 46, 46, 0.9)',
    alignSelf:'flex-end',
    color: '#fff',
    height: '48px',
    "&:hover": {
        backgroundColor:'rgb(46, 46, 46)'
    }
})
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const StyledCard = styled(Card)({
    height: '100%',
    width: 'fit-content',
    maxWidth:'575px',
    overflow: 'scroll',

})

const Quest = () => {
    const [clicked, setClicked] = useState(false)
    const [disabled, setDisabled] = useState(true)
    
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))
    
    
    let params = useParams()
    console.log(params)
    const MyObject = myArray.find(x => x.id === params.questId);
    const handleClick = (event) => {
        event.preventDefault()
        setClicked(true)
    }

    return (
        <Container>
            <Box
                sx={{
                    width: '30%',
                    minWidth: '475px',
                    height: '100%'
                }}
            >
                <StyledCard>
                    <CardMedia
                        component="img"
                        alt={MyObject.alt}
                        height="375"
                        image={images[MyObject.img]}
                    />
                    <CardContent sx={{height: '120px'}}>
                        <Typography sx={{fontWeight: 600}}component="div" variant="h5">
                            {MyObject.title}
                        </Typography>
                        <Typography component="div" variant="body1">
                            {MyObject.body}
                        </Typography>
                        <Typography sx={{mt: 2, fontWeight: 600}}  component="div" variant="h5">
                            Rules
                        </Typography>
                        <Divider/>
                        <Typography component="div" variant="body1">
                            {MyObject.rules.map((element, index) => (
                                <Typography sx={{mt: 2,}}key={index} component="div" variant="body1">
                                    {`${index+1}. ${element}`}
                                </Typography>
                            ))}
                        </Typography>
                        <Typography sx={{mt: 2, fontWeight: 600}}  component="div" variant="h5">
                            Places
                        </Typography>
                        <Divider/>
                        <Box>
                            <Grid container 
                            sx={{margin: '10px', paddingLeft: '0px', gap:'12px'}}
                            >
                                
                                {MyObject.places.map((element, index) => (
                                <Grid sx={{
                                    padding: 0,
                                    margin: 0,
                                }}>
                                    <Item key={index} >
                                        {element}
                                    </Item>
                                    </Grid>
                                ))}
                                
                            </Grid>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '12px',
                            justifyContent: 'center',
                            height: '-webkit-fill-available',
                            width: '100%'
                        }}>
                        {!clicked ? (
                        <>
                        <StyledButton variant="outlined">
                            Participate alone
                        </StyledButton>
                        <StyledButton variant="outlined" onClick={handleClick}>
                            Create Group
                        </StyledButton>
                        </>)
                        : (<Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection:'column',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <Card sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                padding: '10px 20px',
                                backgroundColor: 'rgba(240, 247, 255, 0.8)',
                                borderColor: '#C2E0FF',
                                textAlign:'center'
                            }}>
                                <Typography>
                                    After completion of the quest,
                                    you can ask group members to sell earned NFT
                                    
                                </Typography>
                            </Card>
                                <Button variant="contained" 
                                    disabled={disabled}
                                    sx={{
                                        width: '100%',
                                        backgroundColor:'rgba(46, 46, 46, 0.9)',
                                        height: '48px',
                                        "&:hover": {
                                            backgroundColor:'rgb(46, 46, 46)'
                                        }
                                    }}
                                >
                                Ask Group To Sell NFT
                                </Button>
                            </Box>
                        )
                        }
                        </Box>
                    </CardContent>

                </StyledCard>
            </Box>
           
            {clicked && <Box sx={{
                minWidth:'475px',
                height: '100%',
                
            }}>
                <Card sx={{
                    width: '100%',
                    height: '100%',
                    flexFlow: 'column',
                    display: 'flex'
                }}>
                    <Box sx={{
                        height: '375px',
                        padding: '20px'
                    }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'rows'
                    }}>
                        <Typography sx={{ fontWeight: 600}}  component="div" variant="h5">
                            Hiking Group #1
                        </Typography>
                        <Button>Group link</Button>
                     </div>
                     <Box sx={{
                         display: 'flex',
                         flexDirection: 'column',
                     }}>
                         <div style={{
                             position: 'relative',
                             top: '25px',
                             left: '45px',
                             width:'fit-content'

                         }}>
                         <img src={images['img1.svg']} alt="hey" style={{width: "72px", height:"72px"}}/>
                            <Typography sx={{
                                position: 'relative',
                                left: '70px',
                                bottom: '40px',
                                width: 'fit-content'
                            }}>{MyObject.places[0]}</Typography>
                        </div>
                        <div style={{
                            width: 'fit-content',
                            position: 'relative',
                            bottom: '85px',
                            left: '295px'
                        }}>
                         <img src={images['img2.svg']} alt="hey" style={{width: "72px", height:"72px", opacity: '0.4'}}/>
                            <Typography sx={
                                {
                                    position: 'relative',
                                    right: '80px',
                                    bottom:'70px'
                                }
                            }>{MyObject.places[1]}</Typography>
                        </div>
                        <div style={{
                            width: 'fit-content',
                            position: 'relative',
                            bottom: '80px',
                            left: '75px'
                        }}>
                         <img src={images['img4.svg']} alt="hey" style={{width: "72px", height:"72px", opacity: '0.4'}}/>
                            <Typography sx={{
                                position: 'relative',
                                bottom: '65px',
                                left: '70px',

                            }}>{MyObject.places[3]}</Typography>
                        </div>
                        <div style={{
                            width: 'fit-content',
                            position: 'relative',
                            left: '275px',
                            bottom: '175px',

                        }}>
                         <img src={images['img3.svg']} alt="hey" style={{width: "72px", height:"72px", opacity: '0.4' }}/>
                            <Typography
                                sx={{
                                    position: 'relative',
                                    right: '55px',
                                    bottom: '35px',
                                }}
                            >{MyObject.places[2]}</Typography>

                         </div>
                         <Card sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                padding: '10px 20px',
                                backgroundColor: 'rgba(240, 247, 255, 0.8)',
                                borderColor: '#C2E0FF',
                                textAlign:'center',
                                position:'relative',
                                bottom: '140px'
                            }}>
                                <Typography>
                                    Only Seoraksan has been completed, please ask your group members to complete quest!
                                    
                                </Typography>
                            </Card>
                     </Box>
                    </Box>
                    <CardContent>
                        <Typography sx={{ fontWeight: 600}}  component="div" variant="h5">
                            Group Members
                        </Typography>
                        <Box>
                            <Grid container 
                            sx={{margin: '10px', paddingLeft: '0px', gap:'12px'}}
                            >
                                
                                {MyObject.places.map((element, index) => (
                                <Grid sx={{
                                    padding: 0,
                                    margin: 0,
                                }}>
                                    <Item key={index} >
                                        {element}
                                    </Item>
                                    </Grid>
                                ))}
                                
                            </Grid>
                        </Box>
                    </CardContent>
                    <Card variant="outlined" sx={{
                            display: 'flex',
                            margin: '0px 16px 16px 16px',
                            width: 'auto',
                            flexGrow: '1',
                            justifyContent: 'center',
                            alignItems: 'center'

                            
                            
                        }}>
                            <Typography sx={{ fontWeight: 600}}  component="div" variant="h5" >
                                Group Chat
                            </Typography>
                            
                    </Card>
                        
                    
                </Card>
            </Box>}
            <Box sx={{
                width:'-webkit-fill-available',
                height: '100%',
                
            }}>
                <Card sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    
                        <Typography sx={{fontWeight: '600'}}mt={4} variant='h5'>
                            General Chat
                        </Typography>
                    
                </Card>
            </Box>
        </Container>
    )
}

export default Quest
