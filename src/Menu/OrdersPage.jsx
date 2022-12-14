import React, { useState } from 'react'
import OrderForm from '../components/OrderForm'
import Orderlist from 'src/components/OrderList'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EmptyCard from 'src/components/Dashboard/EmptyCard';

function OrdersPage() {

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
  }

  const [data, setData] = useState([])


  if (data.length != 0) {
    return (
      <>
        <Collapse in={message}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setMessage(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Вашата нарачка е успешно порачана и ќе пристигне насскоро
          </Alert>
        </Collapse>
        <Grid container spacing={3} sx={{
          marginTop: "5rem"
        }}>
          <Grid xs={1} />
          <Orderlist />
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
    return <EmptyCard />
  }

}

export default OrdersPage