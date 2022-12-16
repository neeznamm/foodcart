import { useLocation } from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import { Grid, Pagination, Card, CardContent, Box , Button, Typography, CardActions, ThemeProvider, CircularProgress } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { customTheme } from "src/shared/Theme";
import axios from "axios";
import {burgerImages, beverageImages, soupImages, saladImages, pizzaImages, iceCreamImages, wrapImages} from '../shared/ImageGetter'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from "../context/CartContext";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const getRandomImg = (product, category) => {
  const randomIndex = (product.index+product.name.length)%6;
    // eslint-disable-next-line default-case
  switch (category) {
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
  const {cart, setCart} = useContext(CartContext);
  const [open, setOpen] = useState(false)

  const handleAddToCart = (product) => {
      setCart(
          [...cart, product]
      )
      setOpen(true);
  }

  return <Grid item xs={2} sm={3} md={4} key={product.index}>
      <Collapse in={open}>
          <Alert
              action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                          setOpen(false);
                      }}
                  >
                      <CloseIcon fontSize="inherit" />
                  </IconButton>
              }
              sx={{ mb: 2 }}
          >
              Successfully added to cart!
          </Alert>
      </Collapse>
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
          <Typography variant="h6" component="div" sx={{textAlign:"left", fontWeight:"bold"}}>
            {product.name}
          </Typography>
        </Box>
      </CardContent>
        <Box component="div" sx={{ p: 1, backgroundColor:"rgba(255,255,255,0.8)", height:"fit-content", width:"fit-content", mb:2, borderRadius:"8px",
        position:"absolute", left:"22px" }}>
        <Typography variant="body2" color="text.secondary" sx={{maxWidth:"300px", maxHeight:"100px", textAlign:"left", fontStyle:"italic"}}>
            <span style={{fontWeight:"bold"}}>Description: </span>{product.description.slice(0,200)}{product.description.length>200 && <span style={{fontWeight:"bold"}}> ...</span>}
        </Typography>
        </Box>
        <Box component="div" sx={{ p: 1, backgroundColor:"cornsilk", height:"fit-content", width:"fit-content", mb:2, borderRadius:"8px",
            position:"absolute", left:"130px", top:"280px", fontWeight:"bold" }}>
            <Typography variant="h6">{product.price}</Typography>
        </Box>
    </Card>
      <Button color="error" size="large" endIcon={<AddShoppingCartIcon/>} sx={{position: "absolute", top:"50%", left:"50%", 
                    transform:"translate(-50%,-50%)", zIndex:hovered ? "100" : "-100", fontWeight:"bold",
                    textTransform: "none", fontSize:"1.2rem"}}
              variant="contained"
              onClick={() => handleAddToCart(product)}
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
          {products.length > 9 && <Pagination color="error" count={Math.ceil(products.length/9)} page={currentPage} onChange={(event,page)=>setCurrentPage(page)}
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
