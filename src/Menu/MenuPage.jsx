import React from 'react'
import { Grid, Typography } from "@mui/material";
import CardComponent from '../components/CardComponent'
import Dashboard from 'src/DashboardTemplate/Dashboard';
import Items from '../DashboardTemplate/listItems';

const MenuPage = () => {
  return (
    <>
    <Grid>
      <Dashboard/>
    </Grid>
    <Grid>
      <CardComponent/>
    </Grid>
  </>
  )
}

export default MenuPage