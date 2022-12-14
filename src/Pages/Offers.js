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
      } else {
        setRestaurants(pagesFetched[currentPage]);
      }
    }
    fetchRestaurants();
  },[currentPage])

  const renderDollarIcon = (count) => {
    const dollarSignsArray = []
    for (let i=0;i<count;++i)
      dollarSignsArray.push(<MonetizationOnIcon key={i} sx={{opacity:"0.6", color:'gold'}}/>)
    return dollarSignsArray;
  }

  return loadedRestaurants ?
      (<ThemeProvider theme={customTheme}>
        <div style={{margin:"15px 60px 60px 60px"}}>
        <Typography variant="h2" sx={{mb:3}}>
          Choose a restaurant</Typography>
        <Pagination color="primary" variant="outlined" count={10} page={currentPage} onChange={(event,page)=>setCurrentPage(page)}
        sx={{mb:5}} slots={{ previous: <ArrowBack/>, next: <ArrowForward/> }}/>

    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {restaurants.map((r) => {
      const tags = r.tags.split(",");
      return(
          <Grid item xs={2} sm={4} md={4} key={r.index}>
      <Card variant="outlined" sx={{boxShadow:'5px 5px 15px #8888', maxHeight:"260px", height:"100%", position:"relative"}}>
        <CardContent>
          {renderDollarIcon (r.price_range.length)}
          <Typography variant="h5" component="div" sx={{mb:1}}>
            {r.name}
          </Typography>
          <div style={{height:"130px", float:"left"}}>
            {tags.slice(0,6).map(t => <Chip component="span" key={t} label={t} sx={{m: 0.3}} variant="outlined" color={t.length % 2 === 0 ? "primary" : "success"}/>)}
          </div>
        </CardContent>
        {/*<CardActions>*/}
        {/*  <Button sx={{position:"absolute", bottom:"20px", right:"20px"}} variant="contained" endIcon={<MenuBookIcon />} onClick={() => {*/}
        {/*    navigate('/menu',{state:r})*/}
        {/*  }*/}
        {/*  }*/}
        {/*  >VIEW MENU</Button>*/}
        {/*</CardActions>*/}
        <CardActions sx={{position:"absolute", bottom:"10px", right:"10px"}} >
        <Typography component="legend">Rating:</Typography>
          <Rating name="read-only" value={r.score} readOnly />
        </CardActions>
      </Card>
          </Grid>)
    })}
    </Grid>
        </div>
      </ThemeProvider>)
      : <CircularProgress />;
};

export default Offers;//
