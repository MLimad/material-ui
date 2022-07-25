import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Grid,Toolbar,CssBaseline,Typography,AppBar,Container,Box,Button} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

const App = () => {

    const cards = [1,2,3,4,5,6,7,8];
    const nav = ["Home","Prodcuts","Contact"]

  return (
    <>
        <CssBaseline />
       <header>
       <AppBar position="relative">
            <Toolbar>
                <AdbIcon sx={{fontSize:"40px"}} />
               <Typography variant="h5">
                        EMADEV
               </Typography>
               <Box sx={{marginLeft:"auto"}}>
                    {
                        nav.map((tab,index)=>(
                            <Button key={index} varient="contained"  size="md" sx={{color:"white"}} >{tab}</Button>
                        ))
                    }
               </Box>
            </Toolbar>

        </AppBar>
        <Container maxWidth="lg" sx={{display:'flex',flexDirection:"column",alignItems:"center"}}>

        <Typography sx={{marginTop:"50px"}} variant="h4"  align="center" gutterBottom>
            Heading of My Website
        </Typography>
        <Typography  align="center" sx={{width:'400px'}}  paragraph gutterBottom>
                Hello I am imad Front Ende Developer and i am testing this paragraph and showing it on th screen
        </Typography>
        <Box>
            <Button sx={{margin:'3px'}} variant="contained">Contact me</Button>
            <Button sx={{margin:'3px'}} variant="outlined">Hire me</Button>
        </Box>

        </Container>
       </header>

      <main>
        <Container mxWidth="md" sx={{margin:"40px auto"}}>
            <Grid container  spacing={2}>

                {
                     cards.map((card,index)=>(
                        <Grid item xs={12} md={6} lg={3}>
                    <Card key={index}>
                            <CardMedia 
                            component="img"
                            height="140"
                            image="./1.jpg"
                            alt="green iguana"
                            />
                        <CardContent>
                        <Typography gutterBottom variant="h5">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                             <Button size="small">Learn More</Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))
                } 
               
            </Grid>
        </Container>
      </main>
      <footer>
                <Typography variant='h6' align="center">This is Footer</Typography>
                <Typography variant='subtitle2' align="center" color="text.secondary" gutterBottom>Some Text Here For Testing The footer on The Screen</Typography>
      </footer>
        

    </>
  )
}
export default  App