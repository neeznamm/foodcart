import {useEffect, useState} from "react";
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
import foodImages from '../shared/ImageGetter.js'
import Box from "@mui/material/Box";

const OfferCard = (props) => {
  const {r} = props;
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return <Grid item xs={2} sm={3} md={4} key={r.index}>
    <div className="positioner" style={{position:"relative"}}>
    <Card onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
          variant="outlined" sx={{
            filter: hovered ? "blur(8px)" : null,
            boxShadow:'5px 5px 30px #8888', backgroundImage:`linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), 
          url(${foodImages[(r.tags.length+r.name.length)%17]})`,
      maxHeight:"260px", height:"100%",':hover': {boxShadow: 20}}}>
      <CardContent>
        {/*{renderDollarIcon (r.price_range.length)}*/}
        <Box component="div" sx={{ p: 1, backgroundColor:"rgba(255,255,255,0.85)", height:"fit-content", width:"fit-content", mb:2, borderRadius:"8px" }}>
          <Typography variant="h5" component="div">
            {r.name}
          </Typography>
        </Box>
        <div style={{height:"130px", float:"left"}}>
          {r.tags.split(',').slice(0,6).map(t => <Chip component="span" key={t} label={t} sx={{m: 0.3, opacity:"0.9", fontStyle:"italic"}} color={t.length % 2 === 0 ? "primary" :
              t.length % 13 === 0 ? "warning" : "success"}/>)}
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
      <CardActions sx={{position:"absolute", bottom:"10px", right:"10px", opacity:"0.9"}} >
        <Button variant="contained"><Rating size="small" name="read-only" value={r.score} readOnly /></Button>
      </CardActions>
    </Card>
      <Button sx={{position: "absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", zIndex:hovered ? "100" : "-100"}}
              variant="contained"
              onClick={() => {
                navigate('/menu', {state: r})
              }
              }
              onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      >VIEW MENU
      </Button>
    </div>
  </Grid>
}

const Offers = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loadedRestaurants, setLoadedRestaurants] = useState(false);
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
        pagesFetched.push(resp.data)
        pageIdxsFetched.push(currentPage);
      } else setRestaurants(pagesFetched[currentPage])
    }

    fetchRestaurants();
  },[currentPage])

  return restaurants ?
      (<ThemeProvider theme={customTheme}>
        <div style={{margin:"15px 60px 60px 60px"}}>
        <Typography variant="h4" sx={{mt:1.5, mb:2, float:"left"}}>
          Choose a <b>restaurant</b> to order from</Typography>
          <Pagination color="primary" count={10} page={currentPage} onChange={(event,page)=>setCurrentPage(page)}
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

export default Offers;//
