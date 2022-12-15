import {useEffect, useState} from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import {Button, Chip, CircularProgress, Grid, Pagination, Rating} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {useNavigate} from "react-router-dom";
import {customTheme} from "../shared/Theme";
import {ThemeProvider} from "@mui/material/styles";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import CardMedia from "@mui/material/CardMedia";
import foodImages from '../shared/ImageGetter.js'
import Box from "@mui/material/Box";

const Offers = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loadedRestaurants, setLoadedRestaurants] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesFetched, setPagesFetched] = useState([]);
  const [pageIdxsFetched, setPageIdxsFetched] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!pageIdxsFetched.includes(currentPage)) {
        const resp = await axios.get(`http://localhost:3001/restaurants?_start=${(currentPage - 1) * 9}&_end=${(currentPage) * 9}`);
        setRestaurants(resp.data)
        setLoadedRestaurants(true);
        pagesFetched.push(resp.data)
        pageIdxsFetched.push(currentPage);
      } else setRestaurants(pagesFetched[currentPage])

    }
    fetchRestaurants();
  },[currentPage])

  const renderDollarIcon = (count) => {
    const dollarSignsArray = []
    for (let i=0;i<count;++i)
      dollarSignsArray.push(<MonetizationOnIcon key={i} sx={{opacity:"0.7", color:'darkgreen'}}/>)
    return dollarSignsArray;
  }

  return restaurants ?
      (<ThemeProvider theme={customTheme}>
        <div style={{margin:"15px 60px 60px 60px"}}>
        <Typography variant="h4" sx={{mb:3}}>
          Choose a <b>restaurant</b> to order from</Typography>

    <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {restaurants.map((r) => {
      const tags = r.tags.split(",");
      return(
          <Grid item xs={2} sm={3} md={3} key={r.index}>
          <Card variant="outlined" sx={{boxShadow:'5px 5px 15px #8888', backgroundImage:`linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), 
          url(${foodImages[(r.tags.length+r.name.length)%17]})`,
            maxHeight:"260px", height:"100%", position:"relative",':hover': {
              boxShadow: 20, // theme.shadows[20]
            }}}>
        <CardContent>
          {/*{renderDollarIcon (r.price_range.length)}*/}
          <Box component="div" sx={{ p: 1, backgroundColor:"rgba(255,255,255,0.85)", height:"fit-content", width:"fit-content", mb:2, borderRadius:"8px" }}>
          <Typography variant="h5" component="div">
            {r.name}
          </Typography>
          </Box>
          <div style={{height:"130px", float:"left"}}>
            {tags.slice(0,6).map(t => <Chip component="span" key={t} label={t} sx={{m: 0.3, opacity:"0.9", fontStyle:"italic"}} color={t.length % 2 === 0 ? "primary" :
                t.length % 13 == 0 ? "warning" : "success"}/>)}
          </div>
        </CardContent>
        {/*<CardActions>*/}
        {/*  <Button sx={{position:"absolute", bottom:"20px", right:"20px"}} variant="contained" endIcon={<MenuBookIcon />} onClick={() => {*/}
        {/*    navigate('/menu',{state:r})*/}
        {/*  }*/}
        {/*  }*/}
        {/*  >VIEW MENU</Button>*/}
        {/*</CardActions>*/}
        <CardActions sx={{position:"absolute", bottom:"10px", right:"10px", opacity:"0.9"}} >
          <Button variant="contained" ><Rating name="read-only" value={r.score} readOnly /></Button>
        </CardActions>
      </Card>
          </Grid>)
    })}
      <Pagination color="primary" count={10} page={currentPage} onChange={(event,page)=>setCurrentPage(page)}
                  sx={{mt:18, ml:5}} slots={{ previous: <ArrowBack/>, next: <ArrowForward/> }}/>
        </Grid>
        </div>
      </ThemeProvider>)
      : <CircularProgress />;
};

export default Offers;//
