import { useLocation } from "react-router-dom";
import React, { useEffect, useState, useNavigate } from "react";
import { Grid, Pagination } from "@mui/material";
import CardComponent from "../Components/CardComponent";
import { MEALS } from "src/data/meals";
import axios from "axios";

const Menu = () => {
  //const location = useLocation();
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pagesFetched, setPagesFetched] = useState([]);
  const [pageIdxsFetched, setPageIdxsFetched] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setProductsLoading(true);
      if (!pageIdxsFetched.includes(currentPage)) {
        const resp = await axios.get(
          `http://localhost:3001/products?_start=${
            (currentPage - 1) * 9
          }&_end=${currentPage * 9}`
        );
        //console.log("vrakja", resp)
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

  return (
    <>
    <Grid container spacing={3}>
      {productsLoading ? (
        <div>Loading...</div>
      ) : (
        products.map(({ name, description, price, category, index }) => (
          <Grid item key={index}>
            <CardComponent
              name={name}
              description={description}
              price={price}
              //img={img}
              //restaurantName={restaurantName}
              category={category}
            />
          </Grid>
        ))
      )}
    </Grid>
    <Pagination
    count={10}
    page={currentPage}
    onChange={(event, page) => setCurrentPage(page)}
  />
  </>
  );
};

export default Menu;
