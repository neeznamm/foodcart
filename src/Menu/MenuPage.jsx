import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CardComponent from "../components/CardComponent";
import { MEALS } from "src/data/meals";

const MenuPage = () => {
  const [meals, setMeals] = useState([]);
  const [mealsFiltered, setMealsFiltered] = useState([]);
  const [mealsLoading, setMealsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  const fetchMeals = async () => {
    try {
      // const response = await fetch("meals.json", {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // });

      // console.log(response)

      // const mealsObject = await response.json();

      const mealsObject = MEALS;

      const meals = Object.values(mealsObject);

      setMeals(meals);
      setMealsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const mealMatchesQuery = (meal, query) => {
    return meal.name.toLowerCase().includes(query.toLowerCase());
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(
    () =>
      setMealsFiltered(
        meals.filter((meal) => mealMatchesQuery(meal, searchQuery))
      ),
    [meals, searchQuery]
  );

  return (
    <Grid container spacing={2} sx={{p: 1}}>
      {mealsLoading ? (
        <div>Loading...</div>
      ) : (
        mealsFiltered.map(
          ({ name, description, price, img, restaurantName }) => (
            <Grid item>
              <CardComponent
                name={name}
                description={description}
                price={price}
                img={img}
                restaurantName={restaurantName}
              />
            </Grid>
          )
        )
      )}
    </Grid>
  );
};

export default MenuPage;
