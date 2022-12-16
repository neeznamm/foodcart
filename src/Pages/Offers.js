import React, { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import {Button, Chip, CircularProgress, Grid, Pagination, Rating} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import {useNavigate} from "react-router-dom";
import {customTheme} from "../shared/Theme";
import {ThemeProvider} from "@mui/material/styles";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {restaurantImages} from '../shared/ImageGetter.js'
import Box from "@mui/material/Box";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const OfferCard = (props) => {
  const {r} = props;
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return <Grid item xs={2} sm={3} md={4} key={r.index}>
    <div className="positioner" style={{position:"relative", height:"100%"}}>
    <Card onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
          variant="outlined" sx={{
            filter: hovered ? "blur(8px)" : null,
            cursor: hovered ? "default" : "auto", 
            boxShadow:'5px 5px 30px #8888', backgroundImage:`linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), 
          url(${restaurantImages[(r.tags.length+r.name.length)%17]})`,
      maxHeight:"260px", height:"100%",':hover': {boxShadow: 20}}}>
      <CardContent>
        <Box component="div" sx={{ p: 1, backgroundColor:"rgba(255,255,255,0.8)", height:"fit-content", width:"fit-content", mb:2, borderRadius:"8px" }}>
          <Typography variant="h5" component="div" sx={{textAlign:"left"}}>
            {r.name}
          </Typography>
        </Box>
        <div style={{height:"130px", float:"left"}}>
          {r.tags.split(',').slice(0,6).map(t => <Chip component="span" key={t} label={t} sx={{m: 0.3, fontWeight:"bold", 
          opacity:t.length % 3 === 0 ? "0.7" : t.length % 2 === 0 ? "0.8" : "0.9", fontStyle:"italic", backgroundColor:"black", color:"white"}}/>)}
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
      <CardActions sx={{position:"absolute", bottom:"10px", right:"10px", opacity:"0.9"}} >
        <Button color="error" variant="contained"><Rating size="small" name="read-only" value={r.score} readOnly
        /></Button>
      </CardActions>
    </Card>
      <Button color="error" size="large" endIcon={<MenuBookIcon/>} sx={{position: "absolute", top:"50%", left:"50%", 
                    transform:"translate(-50%,-50%)", zIndex:hovered ? "100" : "-100", fontWeight:"bold",
                    textTransform: "none", fontSize:"1.1rem"}}
              variant="contained"
              onClick={() => {
                navigate('/menu', {state: r})
              }
              }
              onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      ><Typography variant="h6" sx={{fontWeight:"normal"}}>View menu</Typography>
      </Button>
    </div>
  </Grid>
}

const Offers = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [, setLoadedRestaurants] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesFetched, setPagesFetched] = useState([]);
  const [pageIdxsFetched, setPageIdxsFetched] = useState([]);
  const [showOrderButton, setShowOrderButton] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!pageIdxsFetched.includes(currentPage)) {
        const resp = await axios.get(`http://localhost:3001/restaurants?_start=${(currentPage - 1) * 9}&_end=${(currentPage) * 9}`);
        setRestaurants(resp.data)
        setLoadedRestaurants(true);
        pagesFetched.push(resp.data);
        pageIdxsFetched.push(currentPage);
      } else setRestaurants(pagesFetched[currentPage])
    }
    fetchRestaurants();
  }, [currentPage]);

  return restaurants ?
      (<ThemeProvider theme={customTheme}>
        <div style={{margin:"15px 60px 60px 60px"}}>
        <Typography variant="h4" sx={{mt:1.5, mb:2, float:"left"}}>
          Choose a <b>restaurant</b> to order from</Typography>
          <Pagination color="error" count={10} page={currentPage} onChange={(event,page)=>setCurrentPage(page)}
                      size="large" sx={{mt:1.5, ml:5, float:"right"}} slots={{ previous: <ArrowBack/>, next: <ArrowForward/> }}/>

    <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {restaurants.map((r) => {
      const tags = r.tags.split(",");
      return <OfferCard key={r.index} r={r} />
    })}
        </Grid>
        </div>
      </ThemeProvider>)
      : <CircularProgress />;
};

export default Offers;
