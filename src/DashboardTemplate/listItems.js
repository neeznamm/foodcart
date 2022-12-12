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
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
     <Link to={'/'}>
       <ListItemText primary="Home" />
     </Link>
    </ListItemButton>
      <ListItemButton >
          <ListItemIcon>
              <FastfoodIcon/>
          </ListItemIcon>
          <Link to={'/menu'}>
            <ListItemText primary="Menu" />
          </Link>
      </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
        <Link to={'/orders'}>
          <ListItemText primary="My Cart" />
        </Link>
    </ListItemButton>
  </React.Fragment>
);
