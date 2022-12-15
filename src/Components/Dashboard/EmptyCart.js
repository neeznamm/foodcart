import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

const style = {
  fontSize: "3rem"
}

export default function EmptyCart({ message, setMessage }) {
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
      <div className='empty-card-container'>
        <h1 className='empty-cart-title'>Your cart is empty!</h1>
        <HiShoppingCart size={120} opacity={0.3}/>
      </div>
    </>
  )
}
