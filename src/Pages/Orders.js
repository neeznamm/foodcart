import React, { useState, useContext } from 'react'
import OrderForm from '../Components/OrderForm'
import Orderlist from 'src/Components/OrderList'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import EmptyCart from '../Components/Dashboard/EmptyCart';
import CartContext from '../context/CartContext';


function Orders() {

  const data = useContext(CartContext)
  const [cartData,setCartData] = useState(data)


  const [message, setMessage] = useState(false)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const successMessage = () => {
    setOpen(false)
    setMessage(true)
    setCartData([])
  }
  

  if (cartData.length !== 0) {
    return (
      <>
        <Grid container spacing={3} sx={{
          marginTop: "5rem"
        }}>
          <Grid xs={1} />
          <Orderlist data={cartData}/>
          <Grid xs={2} />
          <OrderForm handleOpen={handleClickOpen} />
          <Grid xs={1} />
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Дали сакате да ја потврдите вашата нарачка
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Откажи</Button>
            <Button onClick={successMessage} autoFocus>
              Потврди
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  } else {
    return <EmptyCart message={message} setMessage={setMessage}/>
  }

}

export default Orders