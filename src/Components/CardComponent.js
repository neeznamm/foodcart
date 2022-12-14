import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, IconButton, Collapse, Rating } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const RecipeReviewCard = ({
  name,
  description,
  price,
  img,
  restaurantName,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={restaurantName} subheader={name} />
      <img src={img} alt="" width={350} height={400} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography>{price}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid item xs={4}>
          <IconButton
            aria-label="add to cart"
            onClick={() => {
              alert("Added to cart");
            }}
          >
            <ShoppingBasketIcon />
          </IconButton>
        </Grid>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </CardActions>
    </Card>
  );
};

export default RecipeReviewCard;

RecipeReviewCard.defaultProps = {
  restaurantName: "Restaurant Name",
};
