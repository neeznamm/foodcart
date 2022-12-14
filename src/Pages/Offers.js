import {useEffect, useState} from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import {Button, Chip, CircularProgress, Grid, Pagination} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {useNavigate} from "react-router-dom";

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
        setRestaurants(resp.data);
        setLoadedRestaurants(true);
        pagesFetched.push(resp.data)
        pageIdxsFetched.push(currentPage);
      } else {
        setRestaurants(pagesFetched[currentPage]);
      }
    }
    fetchRestaurants();
  },[currentPage])

  return loadedRestaurants ? <>
        <Typography variant="h2">
          Restaurants
        </Typography>

    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {restaurants.map((r) => {
      const tags = r.tags.split(",");
      return(
          <Grid item xs={2} sm={4} md={4} key={r.index}>
      <Card variant="outlined">
        <CardContent>
          {/*//TODO prasaj mentor*/}
          {r.price_range}
          <Typography variant="h5" component="div" sx={{mb:1}}>
            {r.name}
          </Typography>
          <Typography color="text.secondary">
            {tags.map(t => <Chip component="span" key={t} label={t} sx={{m: 0.3}} variant="outlined" color={t.length % 2 === 0 ? "primary" : "success"}/>)}
          </Typography>
          <Typography variant="body2">
            <br />
            {r.full_address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={() => {
            navigate('/menu',{state:r})
          }
          }
          >VIEW MENU</Button>
        </CardActions>
      </Card>
          </Grid>)
    })}
    </Grid>
          <Pagination count={10} page={currentPage} onChange={(event,page)=>setCurrentPage(page)}/>
      </>
      : <CircularProgress />;
};

export default Offers;
