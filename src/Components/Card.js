import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import {
  Typography,
  Rating,
  Button,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const RecipeReviewCard = ({
  name,
  description,
  price,
  img,
  category,
  restaurantName,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, minHeight: 800, display: "flex", flexDirection: "column" }} >
      <CardHeader title={restaurantName} subheader={`${name.slice(0, 30,)}...`} />
      <img src={img} alt="" width={350} height={400} />
      <CardContent >
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center"}}>
          {description}
        </Typography>
        <Typography>{price}</Typography>
      </CardContent>
      <CardActions>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            sx={{ borderRadius: 9, mx: 1 }}
            style={{ height: "40px", width: "160px"}}
            size="medium"
            startIcon={<ShoppingBasketIcon />}
            onClick={() => {
              alert("Added to cart");
            }}
          >
            Add to cart
          </Button>
        </Grid>
        <Grid item>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            sx={{ borderRadius: 2, mx: 8 }}
          />
        </Grid>
      </CardActions>
    </Card>
  );
};

export default RecipeReviewCard;
