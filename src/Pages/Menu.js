import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Grid, Pagination, Card, CardContent, Box , Button, Typography, CardActions, ThemeProvider, CircularProgress } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { customTheme } from "src/shared/Theme";
import axios from "axios";
import {burgerImages, beverageImages, soupImages, saladImages, pizzaImages, iceCreamImages, wrapImages} from '../shared/ImageGetter'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const getRandomImg = (product, category) => {
  const randomIndex = (product.index+product.name.length)%6;
  console.log(randomIndex)
  switch(category) {
      case "Burger":
        return burgerImages[randomIndex];
      case "Beverage":
        return beverageImages[randomIndex];
      case "Soup":
        return soupImages[randomIndex];
      case "Ice Cream":
        return iceCreamImages[randomIndex];
      case "Salad":
        return saladImages[randomIndex];
      case "Pizza":
        return pizzaImages[randomIndex];
      case "Wrap":
        return wrapImages[randomIndex];
    } 
}

const MenuCard = (props) => {
  const {product} = props;
  const [hovered, setHovered] = useState(false);

  return <Grid item xs={2} sm={2} md={3} key={product.index}>
    <div className="positioner" style={{position:"relative", height:"100%"}}>
    <Card onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
          variant="outlined" sx={{
            filter: hovered ? "blur(8px)" : null,
            cursor: hovered ? "default" : "auto", 
            boxShadow:'5px 5px 30px #8888', backgroundImage:`linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), 
            url(${getRandomImg(product, product.category)})`,
            height:"360px",':hover': {boxShadow: 20}}}>
      <CardContent>
        <Box component="div" sx={{ p: 1, backgroundColor:"rgba(255,255,255,0.8)", height:"fit-content", width:"fit-content", mb:2, borderRadius:"8px" }}>
          <Typography variant="h5" component="div" sx={{textAlign:"left"}}>
            {product.name}
          </Typography>
        </Box>
        {/* <div style={{height:"130px", float:"left"}}>
          {product.tags.split(',').slice(0,6).map(t => <Chip component="span" key={t} label={t} sx={{m: 0.3, fontWeight:"bold", 
          opacity:t.length % 3 === 0 ? "0.7" : t.length % 2 === 0 ? "0.8" : "0.9", fontStyle:"italic", backgroundColor:"black", color:"white"}}/>)}
        </div> */}
      </CardContent>
      <CardActions>
      </CardActions>
      {/* <CardActions sx={{position:"absolute", bottom:"10px", right:"10px", opacity:"0.9"}} >
        <Button variant="contained"><Rating size="small" name="read-only" value={r.score} readOnly /></Button>
      </CardActions> */}
    </Card>
      <Button color="error" size="large" endIcon={<AddShoppingCartIcon/>} sx={{position: "absolute", top:"50%", left:"50%", 
                    transform:"translate(-50%,-50%)", zIndex:hovered ? "100" : "-100", fontWeight:"bold",
                    textTransform: "none", fontSize:"1.2rem"}}
              variant="contained"
              onClick={() => {} //TODOOOOOOOOOOOOOO
              }
              onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      >Add to cart
      </Button>
    </div>
  </Grid>
}

const Menu = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesFetched, setPagesFetched] = useState([]);
  const [pageIdxsFetched, setPageIdxsFetched] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProductsLoading(true);
      if (!pageIdxsFetched.includes(currentPage)) {
        const resp = await axios.get(
          `http://localhost:3001/products?restaurant_id=${location.state.id}&&_start=${
            (currentPage - 1) * 9
          }&_end=${currentPage * 9}`
        );
        setProducts(resp.data);
        setProductsLoading(false);
        pagesFetched.push(resp.data);
        pageIdxsFetched.push(currentPage);
      } else {
        setProducts(pagesFetched[currentPage]);
      }
    };
    fetchProducts();
  }, [currentPage]);

  return products ?
      (<ThemeProvider theme={customTheme}>
        <div style={{margin:"15px 60px 60px 60px"}}>
        <Typography variant="h4" sx={{mt:1.5, mb:2, float:"left"}}>
          Select <b>products</b> to add to your cart</Typography>
          {products.length > 9 && <Pagination color="primary" count={Math.ceil(products.length/9)} page={currentPage} onChange={(event,page)=>setCurrentPage(page)}
                      size="large" sx={{mt:1.5, ml:5, float:"right"}} slots={{ previous: <ArrowBack/>, next: <ArrowForward/> }}/>}
    <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {products.map((product) => {
      return <MenuCard key={product.index} product={product} />
    })}
        </Grid>
        </div>
      </ThemeProvider>)
      : <CircularProgress />;
};

export default Menu;
