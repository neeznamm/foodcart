import * as React from "react";
import { Button, Typography } from "@mui/material";
import ProductHeroLayout from "./ProductHeroLayout";
import { Link } from "react-router-dom";

const backgroundImage =
    "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600";

export default function ProductHero() {
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "center",
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: "none" }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center"  sx={{fontFamily: "cursive"}}>
                FoodCart
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                Enjoy our selection of restaurants and their food offers.
            </Typography>
            <Button
                color="primary"
                variant="contained"
                size="large"
                component="a"
                href="/premium-themes/onepirate/sign-up/"
                sx={{ minWidth: 200 }}
            >
                <Link to={"/offers"} className="home-link">
                    Go To Restaurants
                </Link>
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the best offers
            </Typography>
        </ProductHeroLayout>
    );
}