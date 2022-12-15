import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
      <Link to={'/'} className='sidebar-menu-link'>
          <ListItemButton >
              <ListItemIcon>
                  <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItemButton>
      </Link>
      <Link to={'/offers'} className='sidebar-menu-link'>
      <ListItemButton >
          <ListItemIcon>
              <FastfoodIcon/>
          </ListItemIcon>
          <ListItemText primary="Offers" />
      </ListItemButton>
      </Link>
      <Link to={'/cart'} className='sidebar-menu-link'>
          <ListItemButton >
              <ListItemIcon>
                  <ShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText primary="Cart" />
          </ListItemButton>
      </Link>
  </React.Fragment>
);
