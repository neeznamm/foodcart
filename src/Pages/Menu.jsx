import { useLocation } from "react-router-dom";
import React, { useEffect, useState, useNavigate } from "react";
import { Grid } from "@mui/material";
import CardComponent from "../Components/CardComponent";
import { MEALS } from "src/data/meals";
import axios from "axios";

const Menu = () => {
  //const location = useLocation();
  // const [meals, setMeals] = useState([]);
  // const [mealsFiltered, setMealsFiltered] = useState([]);
  // const [mealsLoading, setMealsLoading] = useState(true);

  //const [searchQuery, setSearchQuery] = useState("");

  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pagesFetched, setPagesFetched] = useState([]);
  const [pageIdxsFetched, setPageIdxsFetched] = useState([]);
  //const navigate = useNavigate();

  // const fetchMeals = async () => {
  //   try {
  //     // const response = await fetch("meals.json", {
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //     Accept: "application/json",
  //     //   },
  //     // });

  //     // console.log(response)

  //     // const mealsObject = await response.json();

  //     const mealsObject = MEALS;

  //     const meals = Object.values(mealsObject);

  //     setMeals(meals);
  //     setMealsLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const mealMatchesQuery = (meal, query) => {
  //   return meal.name.toLowerCase().includes(query.toLowerCase());
  // };

  // useEffect(() => {
  //   fetchMeals();
  // }, []);

  // useEffect(
  //   () =>
  //     setMealsFiltered(
  //       meals.filter((meal) => mealMatchesQuery(meal, searchQuery))
  //     ),
  //   [meals, searchQuery]
  // );

  useEffect(() => {
    const fetchProducts = async () => {
      if (!pageIdxsFetched.includes(currentPage)) {
        const resp = await axios.get(
          `http://localhost:3001/products?_start=${
            (currentPage - 1) * 9
          }&_end=${currentPage * 9}`
        );
        //console.log("vrakja", resp)
        setProducts(resp.data);
        setProductsLoading(true);
        pagesFetched.push(resp.data);
        pageIdxsFetched.push(currentPage);
      } else {
        setProducts(pagesFetched[currentPage]);
      }
    };
    fetchProducts();
  }, [currentPage]);

  return (
    <Grid container spacing={3} sx={{ p: 2 }}>
      {productsLoading ? (
        <div>Loading...</div>
      ) : (
        products.map(
          ({ name, description, price, category }) => (
            <Grid item>
              <CardComponent
                name={name}
                description={description}
                price={price}
                //img={img}
                //restaurantName={restaurantName}
                category={category}
              />
            </Grid>
          )
        )
      )}
    </Grid>
  );
};

export default Menu;
